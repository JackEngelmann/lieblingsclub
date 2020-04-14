import { AppContext } from '../../../infrastructure/appContext'
import { EventModel } from '../orm/event'
import { EventGenreModel } from '../../genre/orm/eventGenre'
import { FileUpload } from 'graphql-upload'
import { EventImageModel } from '../../image/orm/eventImage'
import { setLinksForEvent } from '../../link/commands/setLinksForEvent'
import { createLinksForEvent } from '../../link/commands/createLinksForEvent'
import { LinkType } from '../../link/orm/link'

export type CreateEventInput = {
    admissionFee?: number
    admissionFeeWithDiscount?: number
    amountOfFloors?: number
    clubId: number
    date: string
    description?: String
    genreIds?: number[]
    image?: Promise<FileUpload>
    imageUrls?: string[]
    links?: LinkType[]
    minimumAge?: number
    name: string
    priceCategory?: number
    special?: string
}

export function createEvent(appContext: AppContext, input: CreateEventInput) {
    const { db } = appContext
    const eventModel = new EventModel(db)
    const eventGenreModel = new EventGenreModel(db)
    const eventImageModel = new EventImageModel(db)
    return new Promise<number>(async (resolve, reject) => {
        try {
            const eventId = await eventModel.createEvent(input)
            await eventGenreModel.setGenresForAnEvent(eventId, input.genreIds)
            await eventImageModel.setImageUrlsForEvent(eventId, input.imageUrls)
            if (input.links) {
                await createLinksForEvent(appContext, {
                    eventId,
                    links: input.links,
                })
            }
            resolve(eventId)
        } catch (err) {
            console.error(err)
            reject(err)
        }
    })
}

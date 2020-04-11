import { AppContext } from '../../../infrastructure/appContext'
import { ClubImageModel } from '../orm/clubImage'

export async function queryImageUrlsForClub(
    appContext: AppContext,
    clubId: number
) {
    const { db } = appContext
    const clubImageModel = new ClubImageModel(db)
    return await clubImageModel.getImageUrlsForClub(clubId)
}
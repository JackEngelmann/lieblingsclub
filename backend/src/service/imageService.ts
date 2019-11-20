import { ImageModel } from "../database/models/image";
import { FileUpload } from 'graphql-upload'

type File = {
    data: Buffer
    type: string
}

export class ImageService {
    imageMode: ImageModel

    constructor(imageModel: ImageModel) {
        this.imageMode = imageModel
    }

    async storeFile(upload: Promise<FileUpload>): Promise<string> {
        const { createReadStream, mimetype } = await upload
        const readStream = createReadStream()
        const chunks: Uint8Array[] = []
        const dataUrl = await new Promise<string>((resolve, reject) => {
            readStream.on('data', chunk => {
                chunks.push(chunk)
            })
            readStream.on('end', () => {
                const base64 = Buffer.concat(chunks).toString('base64')
                resolve(`data:${mimetype};base64,${base64}`)
            })
        })
        const id = await this.imageMode.createImage({ dataUrl })
        return `images/${id}`
    }

    async readFile(id: number): Promise<File | undefined> {
        const image = await this.imageMode.getImage(id)
        if (!image) return undefined
        return decodeBase64Image(image.dataUrl)
    }
}

function decodeBase64Image(base64Str: string): File {
    var matches = base64Str.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
        throw new Error('Invalid base64 string');
    }

    return {
        type: matches[1],
        data: new Buffer(matches[2], 'base64')
    }
}
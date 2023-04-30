export interface CreatePostModel {
    title: string
    body: string
    cover_image: string
    userId: string
}



export interface PostItemInf {
    _id: Id
    title: string
    published: boolean
    body: string
    comments_count: number
    likes: any[]
    bookmarks: any[]
    created_at: CreatedAt
    edited_at: any
    cover_image: string
    user: User
}

export interface Id {
    $oid: string
}

export interface CreatedAt {
    $date: string
}

export interface User {
    $oid: string
}

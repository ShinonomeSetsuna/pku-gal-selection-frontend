export type EntryCategory = "character" | "vn" | "staff" | "producer"
export type CompetitionFormat = "qualifying" | "group"

export interface Image {
    url: String
}



export interface CharacterResponse {
    name: String,
    orginal: String,
    image: Image
}

export interface VnResponse {
    title: String
    image: Image
}

export type VNDBResponse = CharacterResponse | VnResponse
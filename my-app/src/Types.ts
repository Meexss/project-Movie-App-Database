export interface InfoType {
    id: string,
    rank: string,
    title: string,
    fullTitle: string,
    year: string,
    image: string,
    crew: string,
    imDbRating: string,
    imDbRatingCount: string
}


export interface InTheaterType {
    id: string,
    title: string,
    fullTitle: string,
    year: string,
    releaseState: string,
    image: string,
    runtimeMins: string,
    runtimeStr: string,
    plot: string,
    contentRating: string,
    imDbRating: string,
    imDbRatingCount: string,
    metacriticRating: string,
    genres: string,
    genreList: [
        {
            key: string,
            value: string
        }
    ],
    directors: string,
    directorList: [
        {
            id: string,
            name: string
        }
    ],
    stars: string,
    starList: [
        {
            id: string,
            name: string
        }
    ]
}

export interface CardType {
    item: InfoType | InTheaterType,
    raiting: boolean,
}


export interface DataType {
    item: InfoType[],
    errorMessage: string,
}


export interface BlockType {
    item: InfoType[] | InTheaterType[],
    name: string,
    apiname: string,
    raiting: boolean,
}

export type ParamsType = {
    idCategory: string,
}

export type ParamsTypeMore = {
    id: string,
}

export interface ActorsType {
    id: string,
        name: string,
        role: string,
        image: string,
        summary: string,
        birthDate: string,
        deathDate: string,
        awards: string,
        height: string,
        knownFor: [
        {
            id: string,
            title: string,
            fullTitle: string,
            year: string,
            role: string,
            image: string
        }
    ],
        castMovies: [
        {
            id: string,
            role: string,
            title: string,
            year: string,
            description: string
        }
    ],
        errorMessage: string
}
import React, {Dispatch, SetStateAction} from "react";

export interface InfoType
{
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

export interface InfoCardType
{
    text: string,
    value?: string | number,
}

export interface InTheaterType
{
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

export interface CardType
{
    id: string,
    image: string,
    title: string,
    imDbRating?: string,
    role?: string,
    year?: string

}

export interface BlockType
{
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

export type ParamsTypeMoreForActor = {
    id: string,
    name: string,
}


export interface ActorsType
{
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

export interface inputType
{
    type: string,
    name: string,
    style: string,
}

export interface TitleType
{
    children: React.ReactNode
}

export interface ButtonType
{
    children: React.ReactNode
    style: string,
    do: () => void
}

export interface OpenCardType
{
    id: string,
    title: string,
    originalTitle: string,
    fullTitle: string,
    type: string,
    year: string,
    image: string,
    releaseDate: string,
    runtimeMins: string,
    runtimeStr: string,
    plot: string,
    plotLocal: string,
    plotLocalIsRtl: true,
    awards: string,
    directors: string,
    directorList: [
        {
            id: string,
            name: string
        }
    ],
    writers: string,
    writerList: [
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
    ],
    actorList: [
        {
            id: string,
            image: string,
            name: string,
            asCharacter: string
        }
    ],
    fullCast: {
        imDbId: string,
        title: string,
        fullTitle: string,
        type: string,
        year: string,
        directors: {
            job: string,
            items: [
                {
                    id: string,
                    name: string,
                    description: string
                }
            ]
        },
        writers: {
            job: string,
            items: [
                {
                    id: string,
                    name: string,
                    description: string
                }
            ]
        },
        actors: [
            {
                id: string,
                image: string,
                name: string,
                asCharacter: string
            }
        ],
        others: [
            {
                job: string,
                items: [
                    {
                        id: string,
                        name: string,
                        description: string
                    }
                ]
            }
        ],
        errorMessage: string
    },
    genres: string,
    genreList: [
        {
            key: string,
            value: string
        }
    ],
    companies: string,
    companyList: [
        {
            id: string,
            name: string
        }
    ],
    countries: string,
    countryList: [
        {
            key: string,
            value: string
        }
    ],
    languages: string,
    languageList: [
        {
            key: string,
            value: string
        }
    ],
    contentRating: string,
    imDbRating: string,
    imDbRatingVotes: string,
    metacriticRating: string,
    ratings: {
        imDbId: string,
        title: string,
        fullTitle: string,
        type: string,
        year: string,
        imDb: string,
        metacritic: string,
        theMovieDb: string,
        rottenTomatoes: string,
        filmAffinity: string,
        errorMessage: string
    },
    wikipedia: {
        imDbId: string,
        title: string,
        fullTitle: string,
        type: string,
        year: string,
        language: string,
        titleInLanguage: string,
        url: string,
        plotShort: {
            plainText: string,
            html: string
        },
        plotFull: {
            plainText: string,
            html: string
        },
        errorMessage: string
    },
    posters: {
        imDbId: string,
        title: string,
        fullTitle: string,
        type: string,
        year: string,
        posters: [
            {
                id: string,
                link: string,
                aspectRatio: 0,
                language: string,
                width: 0,
                height: 0
            }
        ],
        backdrops: [
            {
                id: string,
                link: string,
                aspectRatio: 0,
                language: string,
                width: 0,
                height: 0
            }
        ],
        errorMessage: string
    },
    images: {
        imDbId: string,
        title: string,
        fullTitle: string,
        type: string,
        year: string,
        items: [
            {
                title: string,
                image: string
            }
        ],
        errorMessage: string
    },
    trailer: {
        imDbId: string,
        title: string,
        fullTitle: string,
        type: string,
        year: string,
        videoId: string,
        videoTitle: string,
        videoDescription: string,
        thumbnailUrl: string,
        uploadDate: string,
        link: string,
        linkEmbed: string,
        errorMessage: string
    },
    boxOffice: {
        budget: string,
        openingWeekendUSA: string,
        grossUSA: string,
        cumulativeWorldwideGross: string
    },
    tagline: string,
    keywords: string,
    keywordList: [
        string
    ],
    similars: [
        {
            id: string,
            title: string,
            image: string,
            imDbRating: string
        }
    ],
    tvSeriesInfo: {
        yearEnd: string,
        creators: string,
        creatorList: [
            {
                id: string,
                name: string
            }
        ],
        seasons: [
            string
        ]
    },
    tvEpisodeInfo: {
        seriesId: string,
        seriesTitle: string,
        seriesFullTitle: string,
        seriesYear: string,
        seriesYearEnd: string,
        seasonNumber: string,
        episodeNumber: string,
        previousEpisodeId: string,
        nextEpisodeId: string
    },
    errorMessage: string
}

export interface PosterType
{
    imDbId: string,
    title: string,
    fullTitle: string,
    type: string,
    year: string,
    posters: [
        {
            id: string,
            link: string,
            aspectRatio: 0,
            language: string,
            width: 0,
            height: 0
        }
    ],
    backdrops: [
        {
            id: string,
            link: string,
            aspectRatio: 0,
            language: string,
            width: 0,
            height: 0
        }
    ],
    errorMessage: string
}

export interface ActorImg
{
    image: string,
}

export interface MiniActorType
{
    id: string,
    type: string,
    name: string,
    image: string,
}

export interface BigActorType
{
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

export interface OpenAllFilmsType
{
            id: string,
            role: string,
            title: string,
            year: string,
            description: string
}

export interface PopUpTypes {
    display: boolean,
    id: string | undefined,
    do: () => void,
}

export interface ComingSoonTypes {
    items: [
        {
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
    ]
}

export interface SliderType
{
    link: string,
    id: string,
}

export interface BurgerMenuTypes {
    type: boolean,
    setType: Dispatch<SetStateAction<boolean>>,
}
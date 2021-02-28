export interface ICurrentTvShowData {
 
    name: string,
    language: string,
    genres: string[],
    status: string,
    premiered: Date,
    rating: {
      average: number
    },
    weight: number,
    network: {
      country: {
        name: string
      }
    },
    image: {
      medium: string
    },
    summary: string
  }



//     show:  Show;
// }
// export interface Show {
//     name:         string;
//     language:     string;
//     genres:       string[];
//     status:       string;
//     premiered:    Date;
//     rating:       Rating;
//     weight:       number;
//     image:        Image;
//     summary:      string;
//     network:      Network;
// }
// export interface Image {
//     medium:   string;
// }

// export interface Network {
//     country: Country;
// }

// export interface Country {
//     name:     string;
// }

// export interface Rating {
//     average: number;
// }

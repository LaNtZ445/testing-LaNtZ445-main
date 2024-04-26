import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

export const setupMock = () => {
 mockedAxios.get.mockImplementation((url) => {
    if (url.includes('s=Star Wars')) {
      return Promise.resolve({
        data: {
          Search: [
            {
              Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
              Title: "Star Wars: Episode IV - A New Hope",
              Type: "movie",
              Year: "1977",
              imdbID: "tt0076759"
            },
          ],
        },
      });
    }
    return Promise.resolve({ data: { Search: [] } });
 });
};


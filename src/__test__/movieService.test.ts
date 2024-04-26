import axios from 'axios';
import { getData } from '../ts/services/movieService';
import { setupMock } from '../ts/services/__mocks__/axiosMock';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
 setupMock();
});

describe('getData', () => {
 test('it should fetch data', async () => {
    const searchTerm = 'Star Wars';
    const expectedData = [
      {
        Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
        Title: "Star Wars: Episode IV - A New Hope",
        Type: "movie",
        Year: "1977",
        imdbID: "tt0076759"
      },
    ];

    const data = await getData(searchTerm);

    expect(mockedAxios.get).toHaveBeenCalledWith(`http://omdbapi.com/?apikey=416ed51a&s=${searchTerm}`);
    expect(data).toEqual(expectedData);
 });

 console.log("Hämta data för star Wars ep IV :)")
});

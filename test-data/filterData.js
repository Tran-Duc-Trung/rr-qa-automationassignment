export const filterData = {
    validSearchTerms: [
        { term: 'Avengers', shouldFind: true },
        { term: 'Batman',   shouldFind: true },
        { term: 'xyzxyz123', shouldFind: false },
    ],

    validYears: [2020, 2021, 2022, 2023],
    invalidYears: [1800, 9999, -1, 0],

    validRatings: [1, 5, 10],
    invalidRatings: [-1, 11, 0],

    genres: ['Action', 'Comedy', 'Drama', 'Horror'],
};
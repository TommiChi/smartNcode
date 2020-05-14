import axios from 'axios';

const store = {
  state: {
    programs: [],
  },
  getters: {
    programs: (state: any) => () => state.programs,
  },
  mutations: {
    setProgramList(state: any, data: any) {
      state.programs = data;
    },
  },
  actions: {
    getGemist({ commit }: any) {
      axios({
        url: 'https://graph.kijk.nl/graphql',
        method: 'post',
        data: {
          query: `{
            programsByDate(date: "2020-05-11", numOfDays: 7, availability: true, programTypes: EPISODE) {
              totalResults
              items {
                id
                title
                guid
                description
                type
                imageMedia {
                  url
                }
                series {
                  title
                  imageMedia {
                    url
                  }
                }
                sources {
                  type
                  file
                  drm
                }
              }
            }
          }`,
        },
      }).then((response) => {
        console.warn('/!\\ axios --> ', response);
        commit('setProgramList', response.data.data.programsByDate);
      });
    },
  },
};

export default store;

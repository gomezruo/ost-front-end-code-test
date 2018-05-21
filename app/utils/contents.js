const BASE_URL = 'http://feature-code-test.skylark-cms.qa.aws.ostmodern.co.uk:8000';

const getSeason = seasonKey => {
  return fetch('../../testData.json').catch(err => {
    console.log(err);
  });
};

const getEpisode = episodeUrl => {
  return fetch(`${BASE_URL}${episodeUrl}`).catch(err => {
    console.log(err);
  });
}

export {getSeason, getEpisode};

const gitHubAPI = require('../src/github_api');

describe('creating URL', () => {
  it('returns the correct URL', () => {
    const ghAPI = new gitHubAPI('arthurfincham');
    expect(ghAPI.URL).toEqual('https://api.github.com/users/arthurfincham')
  });
});
import { fromJS } from 'immutable';
import request from 'utils/request';

export default class GitHubInteractor {
  defaultState() {
    return fromJS({ username: 'mjaneczek', repos: [], error: null, loading: false });
  }

  fetch() {
    return request(`https://api.github.com/users/${this.p('github.username')}/repos`)
  }

  onFetch() {
    return this.state.set('loading', true).set('error', null).set('repos', [])
  }

  onFetchSuccess(response) {
    const repos = response.map((repo) => ({ id: repo.id, name: repo.name, description: repo.description, language: repo.language }))
    return this.state.set('loading', false).set('repos', repos)
  }

  onFetchError(error) {
    return this.state.set('loading', false).set('error', error.message)
  }

  onSetUsername(username) {
    return this.state.set('username', username)
  }
}

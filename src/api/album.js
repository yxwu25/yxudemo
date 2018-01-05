import ApiBase from './base'

class ApiAlbum extends ApiBase {
  fetchAlbumList (userId, _page = 1, _limit = 20) {
    return this.fetch({
      url: '/albums',
      params: {
        userId,
        _order: 'desc',
        _sort: 'id',
        _page,
        _limit
      }
    })
  }

  createAlbum (data) {
    return this.post('/albums', data)
  }

  deleteAlbum (id) {
    return this.delete(`/albums/${id}`)
  }
}

export default new ApiAlbum()

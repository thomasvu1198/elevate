import axios from 'axios';
import URLS from './urls';

const Playlists = {
    createPlaylist : async (params) => (await axios.post(URLS.createPlaylist(),params)).data,
    addPlaylistToUser : async (params) => (await axios.post(URLS.addPlaylistToUser(),params)).data,
    addTrackToPlaylist : async (params) => (await axios.post(URLS.addTrackToPlaylist(),params)).data,
    getPlaylistTracks : async (id) => (await axios.get(URLS.getPlaylistTracks(id))).data
}

const Users = {
    createUser : async (params) => (await axios.post(URLS.createUser, params)).data,
    userAdminStatus : async (id) => (await axios.get(URLS.userAdminStatus(id))).data,
    getUserData : async (id) => (await axios.get(URLS.getUserData(id))).data,
    setLike : async (params) => (await axios.post(URLS.setLike(),params)).data
}

const Admin = {
    createTrack : async (params) => (await axios.post(URLS.createTrack(),params,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })).data,
    createArtist :  async (params) => (await axios.post(URLS.createArtist(),params)).data
}

const Artist = {
    getArtists : async (params) => (await axios.get(URLS.getArtists(),params)).data
}


const Tracks = {
    getTracks :  async (id) => (await axios.get(URLS.getTracks(id))).data,
    getTracksByArtist : async (id) => (await axios.get(URLS.getTracksByArtist(id))).data
}

let API;
export default API = {
    ...Playlists,
    ...Users,
    ...Admin,
    ...Artist,
    ...Tracks
}
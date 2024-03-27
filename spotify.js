var redirectURL = "http://localhost:8080"
var client_id = "";
var client_secret = "";

const Authorize = "https://accounts.spotify.com/authorize"

function requestAuthorization() {

  client_id = document.getElementById("clientId").value;
  client_secret = document.getElementById("clientSecret").value;

  let url = Authorize
  url += "?client_id=" + client_id
  url += "&response_type=code";
  url += "&redirect_uri=" + encodeURI(redirectURL);
  url += "&show_dialog=true";
  //the scope of what we are using (can add more)
  //need permission for Spotify API calls, add that in scope if want to do
  //-read top artists, read recently played songs/artists, read private playlist content
  url += "&scope=user-top-read user-read-recently-played playlist-read-private"
  window.location.href = url; //Spotify Authorization Page
}
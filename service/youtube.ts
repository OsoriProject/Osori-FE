class Youtube {
  getRequestOptions: RequestInit
  key: string | undefined;
  constructor(key: string | undefined){
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    }
  }
  search(query: string){
    return 
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&type=video&key=${this.key}`,
        this.getRequestOptions
      )
      .then(response =>{ response.json()})
      .then(result =>
        result.items.map((item: { id: { videoId: any; }; })=>({...item, id: item.id.videoId}))
      );
  }
}

export default Youtube;
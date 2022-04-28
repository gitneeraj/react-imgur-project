const fetchImages = async (section, sort, window) => {
  return fetch(`https://api.imgur.com/3/gallery/${section}/${sort}/${window}/0`, {
    headers: new Headers({
      'Authorization': 'Client-ID 50026e76c203a6e',
    })
  }).then(function(res) {
    return res.json();
  })  
}

export default fetchImages


const posts = [{
    "id": 1,
    "title": "Voodoo Dawn"
  }, {
    "id": 2,
    "title": "My Little Eye"
  }, {
    "id": 3,
    "title": "Demonic Toys"
  }, {
    "id": 4,
    "title": "Designated Mourner, The"
  }, {
    "id": 5,
    "title": "Monkey Trouble"
  }, {
    "id": 6,
    "title": "Executioners (Xian dai hao xia zhuan)"
  }, {
    "id": 7,
    "title": "Trip, The"
  }, {
    "id": 8,
    "title": "Toy Story Toons: Hawaiian Vacation"
  }, {
    "id": 9,
    "title": "Beloved/Friend (a.k.a. Amigo/Amado) (Amic/Amat)"
  }, {
    "id": 10,
    "title": "Socialism (Film socialisme)"
  }, {
    "id": 11,
    "title": "Walker"
  }, {
    "id": 12,
    "title": "Unconditional"
  }, {
    "id": 13,
    "title": "Cookout, The"
  }, {
    "id": 14,
    "title": "Godzilla: Final Wars (Gojira: Fainaru uôzu)"
  }, {
    "id": 15,
    "title": "Jane Eyre"
  }];

const listPosts = () => {
    posts.forEach(post => {
        console.log(post.title);
    });
}

const addPost = (post) => {
    const res = new Promise((response, reject) => {
        const lastLength = posts.length;
        const newLength = posts.push(post);
        if(newLength > lastLength) response("\nPost was added succesfully.\n");
        else reject("\nPost was not added!\n");
    });
    res.then(msg => {
        console.log(msg);
        listPosts();
    }).catch(err => console.log(err));
}

listPosts();

addPost({
    id: 16,
    title: "New Post",
});
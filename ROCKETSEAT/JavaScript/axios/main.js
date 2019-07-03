axios.get('https://api.github.com/users/diegoperesmarques')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
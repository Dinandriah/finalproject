const url = 'http://finapi-env.gsnqvvrdga.us-east-2.elasticbeanstalk.com/places'

export const placesApi = async (data, action) => {
    await fetch (url,{
    method: action,
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
}).then (res => res.json())
    .then(response => console.log('Victory', JSON.stringify (response)))
    .catch (error => console.error ('Error:', error))
}
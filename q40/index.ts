type Make_Album = {
    artist_name : string,
    album_title : string,
    tracks? : number
}


function make_album(name: string, title: string, tracks?: number): Make_Album{
    let result: Make_Album = {
        artist_name : name,
        album_title : title,
    }
    if(tracks !== undefined){
        result.tracks = tracks;
    }
    return result;
}
let result = make_album('Kendrick Lamar', 'DAMN');
let result1 = make_album('Ed Sheeran ', 'Divide', 7);
let result2 = make_album('Beyoncé ', 'Lemonade');
let result3 = make_album('The Weeknd', 'After Hours');
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
//Element Access
let search = document.getElementById('search')
let listings = document.getElementById('listings')

// Variable Intialization
let loadedVidoes = []
let currentPage = 1
let isbutton = false


// On load functionlity of videos when open the website
document.addEventListener('DOMContentLoaded', async () => {
    try {
        showLoader()
        const intialData = await fetchData(1)
        hideLoader()
        loadedVidoes.push(intialData.data)
        ShowContent(intialData.data)
        createBtn()
    } catch (error) {
        console.error(error)
    } 
});


//Search Functionlity filter videos
search.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    const filteredVideos = loadedVidoes.flat().filter(video => {
        return video.items.snippet.title.toLowerCase().includes(searchTerm) ||
               video.items.snippet.channelTitle.toLowerCase().includes(searchTerm);
    });
    if(listings.parentElement.children[1].classList.contains('btnclick')){
        listings.parentElement.children[1].classList.add('btnclickRemove')
    }
    if(searchTerm == ''){
        listings.parentElement.children[1].classList.remove('btnclickRemove')

    }
    listings.innerHTML = '';
    ShowContent(filteredVideos);
});


//Fetching Data
async function fetchData(page) {
    const url = `https://api.freeapi.app/api/v1/public/youtube/videos?page=${page}&limit=20&sortBy=keep%2520one%253A%2520mostLiked%2520%257C%2520mostViewed%2520%257C%2520latest%2520%257C%2520oldest`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    try {
        const response = await fetch(url, options);
        let data = await response.json();
        loadedVidoes.push(data.data.data)
        return data.data
      
    } catch (error) {
        console.error(error);
    }
}




// Dynamically create and show The list of videos
function ShowContent(data) {

    data.forEach((element) => {
        // Create NEW elements for each iteration
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';

        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = 'thumbnail-container';

        const thumbnail = document.createElement('img');
        thumbnail.className = 'thumbnail';
        thumbnail.alt = 'Video thumbnail';

        let duration = document.createElement('div');
        duration.className = 'duration';

        const videoDetails = document.createElement('div');
        videoDetails.className = 'video-details';

        const channelIcon = document.createElement('div');
        channelIcon.className = 'channel-icon';

        const metadata = document.createElement('div');
        metadata.className = 'meta-data';

        const videoTitle = document.createElement('h3');
        videoTitle.className = 'video-title';

        const channelName = document.createElement('div');
        channelName.className = 'channel-name';

        const viewsTime = document.createElement('div');
        viewsTime.className = 'views-time';

        const viewsSpan = document.createElement('span');
        const timeSpan = document.createElement('span');

        // Set content from data
        try {
            thumbnail.src = element.items.snippet.thumbnails.standard.url;
            let durationp = element.items.contentDetails.duration
            duration.textContent = parseDuration(durationp);
            videoTitle.textContent = element.items.snippet.title;
            channelName.textContent = element.items.snippet.channelTitle;
            channelIcon.textContent = String(element.items.snippet.channelTitle).charAt(0)
            viewsSpan.textContent = `${element.items.statistics.viewCount} views`;
            timeSpan.textContent = timeAgo(element.items.snippet.publishedAt); 
        } catch (error) {
            console.error('Error processing video data:', error);
           
        }

        // Append elements
        viewsTime.appendChild(viewsSpan);
        viewsTime.appendChild(document.createTextNode(' • '));
        viewsTime.appendChild(timeSpan);

        metadata.appendChild(videoTitle);
        metadata.appendChild(channelName);
        metadata.appendChild(viewsTime);

        videoDetails.appendChild(channelIcon);
        videoDetails.appendChild(metadata);

        thumbnailContainer.appendChild(thumbnail);
        thumbnailContainer.appendChild(duration);

        videoCard.appendChild(thumbnailContainer);
        videoCard.appendChild(videoDetails);
        // Append videos into listing container
        listings.appendChild(videoCard);

        //Redirect to that video in in youtube
        videoCard.addEventListener('click', () => {
            const videoId = element.items.id;
            if (videoId) {
                window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
            }})
    });

}


//Creates A button at bottom which loads more videos
function createBtn(){
    if(!isbutton){
    let btnclick = document.createElement('button')
    btnclick.classList.add('btnclick')
    btnclick.textContent = 'Click To Add More Videos'
        listings.parentElement.appendChild(btnclick)
        btnclick.addEventListener('click',async()=>{
            simpleLoaderShow()
                try {
                   currentPage++
                   const newData = await fetchData(currentPage)
                   simpleLoaderHide()
                   ShowContent(newData.data)
                } catch (error) {
                   console.error(error)
                   currentPage--;
                }
            
        })
    }
}

//Utilit Functionalites Starts here

//Unique Loader Functionality
const loaderContainer = document.getElementById('loader');
function showLoader() {
    loaderContainer.style.display = 'flex'
    listings.style.justifyContent = 'center'
    loaderContainer.style.marginBottom = '60vh'
}
function hideLoader() {
    listings.style.justifyContent = 'flex-start'
    loaderContainer.style.display = 'none'
    loaderContainer.style.marginBottom = ''
}

//simple loader Functionality

let simpleLoaderCont = document.createElement('div')
simpleLoaderCont.classList.add('simple-loader-container')
let simpleLoader = document.createElement('div')
simpleLoader.classList.add('simple-loader')
simpleLoaderCont.appendChild(simpleLoader)

function simpleLoaderShow(){
    listings.appendChild(simpleLoaderCont)
}

function simpleLoaderHide(){
    listings.removeChild(simpleLoaderCont)
}


//Format Time
function timeAgo(publishedAt) {
    const publishedDate = new Date(publishedAt);
    const currentDate = new Date();
    const seconds = Math.floor((currentDate - publishedDate) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
        }
    }

    return 'Just now';
}
//Format Duration
function parseDuration(duration) {
    let time = duration.replace('PT', '');
    let hours = 0, minutes = 0, seconds = 0;
    
    // Extract hours
    if(time.includes('H')) {
        const hoursArr = time.split('H');
        hours = parseInt(hoursArr[0]);
        time = hoursArr[1];
    }
    
    // Extract minutes
    if(time.includes('M')) {
        const minutesArr = time.split('M');
        minutes = parseInt(minutesArr[0]);
        time = minutesArr[1];
    }
    
    // Extract seconds
    if(time.includes('S')) {
        seconds = parseInt(time.replace('S', ''));
    }

    // Format based on duration length
    if(hours > 0) {
        return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    if(minutes > 0) {
        return `${minutes}:${String(seconds).padStart(2, '0')}`;
    }
    return `0:${String(seconds).padStart(2, '0')}`;
}
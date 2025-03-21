// let moodEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];

// // Initialize mood buttons
// document.querySelectorAll('.mood-btn').forEach(button => {
//     button.addEventListener('click', (e) => {
//         if (document.body.lastElementChild.classList.contains('alert')) {
//             document.body.removeChild(document.body.lastElementChild)
//         }
//         const selectedMood = e.target.dataset.mood;
//         const currentDate = new Date().toISOString().split('T')[0];
        
//         // Check if entry already exists for today
//         const existingEntryIndex = moodEntries.findIndex(entry => entry.date === currentDate);
        
//         if (existingEntryIndex !== -1) {
//             moodEntries[existingEntryIndex].mood = selectedMood;
//         } else {
//             moodEntries.push({ date: currentDate, mood: selectedMood });
//         }

//         localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
//         toast(true,`Mood ${selectedMood} Update Successfully!`)
//         updateViews();
//     });
// });

// // Calendar view with weeks
// function generateCalendar() {
//     const calendar = document.getElementById('calendar');
//     calendar.innerHTML = '';
    
//     const date = new Date();
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const firstDay = new Date(year, month, 1).getDay();

//     // Add week days header
//     const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     const greeneryEmojis = [
//         "🌿", "🍃", "🌱", "🌳", "🌲", "🍀", "🌾", "🌵", "🎍", "🌼", "🌺",
//         "🌷", "🌻", "🌴", "🌎", "🌍", "🌏", "🍁", "🍂", "🍃", "🌾", "🌱",
//         "🌿", "🍄", "🎋", "🏵️", "💐", "🌸", "🌹", "🌼", "🥀", "🌊", "🌎",
//         "🪴", "🍇", "🍉", "🍊", "🥝", "🥥"
//     ];
//     weekDays.forEach(day => {
//         const headerCell = document.createElement('div');
//         headerCell.className = 'week-header';
//         headerCell.textContent = day;
//         calendar.appendChild(headerCell);
//     });

//     // Add empty cells for days before first day of month
//     for (let i = 0; i < firstDay; i++) {
//         const emptyCell = document.createElement('div');
//         emptyCell.className = 'day-cell empty';
//         calendar.appendChild(emptyCell);
//     }

//     // Create calendar days
//     for (let day = 1; day <= daysInMonth; day++) {
//         const randomEmoji = Math.floor(Math.random() * greeneryEmojis.length);

//         const cell = document.createElement('div');
//         let before = document.createElement('div')
//         before.textContent = greeneryEmojis[randomEmoji]
//         before.className =  'day-cell-before'
//         cell.className = 'day-cell';
//         const currentDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
//         const entry = moodEntries.find(e => e.date === currentDate);
//         cell.textContent = entry ? day + entry.mood : day;
//         cell.appendChild(before)
//         calendar.appendChild(cell);
//     }
// }

// // Timeline view with week separators
// function generateTimeline() {
//     const timeline = document.getElementById('timeline');
//     timeline.innerHTML = '';
    
//     moodEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    
//     let currentWeek = null;
//     moodEntries.forEach(entry => {
//         const entryDate = new Date(entry.date);
//         const weekNumber = getWeekNumber(entryDate);
        
//         if (weekNumber !== currentWeek) {
//             const weekHeader = document.createElement('div');
//             weekHeader.className = 'week-header';
//             weekHeader.textContent = `Week ${weekNumber}`;
//             timeline.appendChild(weekHeader);
//             currentWeek = weekNumber;
//         }

//         const entryDiv = document.createElement('div');
//         entryDiv.className = 'log-entry';
//         entryDiv.innerHTML = `
//             <span>${entry.mood}</span>
//             <span>${entryDate.toLocaleDateString()}</span>
//         `;
//         timeline.appendChild(entryDiv);
//     });
// }

// // Helper function to get week number
// function getWeekNumber(d) {
//     d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
//     d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
//     const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
//     return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
// }


// //Custom Alert Functionality
// function toast(success, message) {
//     //Dynamically creates Alert Message

//     // Create alert container
//     const alert = document.createElement('div');
//     alert.className = 'alert';
//     // Create alert content
//     const alertContent = document.createElement('div');
//     alertContent.className = 'alert-content';

//     // Create icon container
//     const alertIcon = document.createElement('div');
//     alertIcon.className = 'alert-icon';

//     // Create icon
//     const icon = document.createElement('i');
//     icon.className = 'fas fa-check';


//     // Create message element
//     const alertMessage = document.createElement('div');
//     alertMessage.className = 'alert-message';
//     alertMessage.id = 'alert-message';
//     alertMessage.textContent = message;

//     // Create progress bar container
//     const progressBar = document.createElement('div');
//     progressBar.className = 'progress-bar';

//     // Create progress element
//     const progress = document.createElement('div');
//     progress.className = 'progress';
//     progress.id = 'progress';

//     //check succes type
//     if (success == false) {
//         alertIcon.style.backgroundColor = '#f4618d'
//         progress.style.backgroundColor = '#f4618d'
//         icon.className = 'fas fa-xmark'
//         alert.style.borderLeft = '4px solid #f4618d'
//     }
//     // Assemble components
//     progressBar.appendChild(progress);
//     alertContent.appendChild(alertIcon);
//     alertContent.appendChild(alertMessage);
//     alertIcon.appendChild(icon);
//     alert.appendChild(alertContent);
//     alert.appendChild(progressBar);
//     // Add to DOM
//     document.body.appendChild(alert);


//     setTimeout(() => {
//         alert.remove();
//     }, 5500)
// }



// function updateViews() {
//     generateCalendar();
//     generateTimeline();
// }

// // Initial render
// updateViews();

const images = [
  "https://www.w3schools.com/w3css/img_lights.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnF-9MqUDzNEnx6gVmFOatlpY_TdXJ_CReA&s",
];

const fetchQuote = async () => {
    const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
    const options = { method: "GET", headers: { accept: "application/json" } };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.data);
      getRandomImage();
    } catch (error) {
      console.error(error);
    }
  }; 
  const getRandomImage = async () => {
       const randomImage = images[Math.floor(Math.random() * images.length)];
       console.log(randomImage)
  };
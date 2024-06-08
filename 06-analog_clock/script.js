document.addEventListener('DOMContentLoaded', () => {
  const timezoneSelector = document.getElementById('timezone-selector');
  
  fetch('timezones.json')
    .then(response => response.json())
    .then(timezones => {
      // Sort the timezones alphabetically by label
      timezones.sort((a, b) => a.label.localeCompare(b.label));

      // Populate the dropdown
      timezones.forEach(tz => {
        const option = document.createElement('option');
        option.value = tz.value;
        option.textContent = tz.label;
        timezoneSelector.appendChild(option);
      });

      updateClock(); // Initial call to set the clock hands correctly after loading timezones
    })
    .catch(error => console.error('Error loading time zones:', error));

  timezoneSelector.addEventListener('change', updateClock);

  setInterval(updateClock, 1000);
});

function updateClock() {
  const selectedTimezone = document.getElementById('timezone-selector').value;
  const now = new Date(new Date().toLocaleString("en-US", {timeZone: selectedTimezone}));

  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');
  
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  
  const secondsDegrees = ((seconds / 60) * 360);
  const minutesDegrees = ((minutes / 60) * 360);
  const hoursDegrees = ((hours / 12) * 360);

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}


//Magical circle animation 

const ratingCircle = document.querySelector('.ratingEl')
const scoreIconElement = document.querySelector('.scoreEl')
const textIconElement = document.querySelector('.textEl')
const circleImageEl = document.querySelector('.circleImage')
ratingCircle.addEventListener('click', () => {
  if (!circleImageEl.classList.contains('circleImgEl') && !circleImageEl.classList.contains('circleDisappear')) {

    scoreIconElement.classList.toggle('scoreAnimated');
    textIconElement.classList.toggle('textAnimated');
    circleImageEl.classList.toggle('circleImgEl')

  } else {
    circleImageEl.classList.toggle('circleDisappear')
    scoreIconElement.classList.toggle('scoreDisappearing')
    textIconElement.classList.toggle('textDisappearing')
  }

})

//progressBr-recommendation

document.querySelector('.recommendation-bar').addEventListener('click', function() {
  var progressBars = document.querySelectorAll('.progress-stacked > div');
  const firstEmojiIconEl =document.querySelector('.firstEmojiIcon');
  const thirdEmojiIconEl =document.querySelector('.thirdEmojiIcon');
  const secondEmojiIconEl =document.querySelector('.secondEmojiIcon')


  progressBars[0].style.width = '50%';
  firstEmojiIconEl.classList.add('firstIconAnimated')
  progressBars[1].style.width = '30%';
  secondEmojiIconEl.classList.add('secondIconAnimated')
  progressBars[2].style.width = '20%';
  thirdEmojiIconEl.classList.add('thirdIconAnimated')


});
//Rating scale responses


document.querySelector('.responses').addEventListener('click', function() {
const firstResponseEl= document.querySelector('.response-one');
const secondResponseEl =document.querySelector('.response-two');
const thirdResponseEl =document.querySelector('.response-three');
const fourthResponseEl =document.querySelector('.response-four');
const fifthResponseEl =document.querySelector('.response-five');
const starIconEl =document.querySelector('.starIcon')
starIconEl.classList.remove('d-none')
firstResponseEl.style.width='15%';
secondResponseEl.style.width='50%';
thirdResponseEl.style.width='35%';
fourthResponseEl.style.width='45%';
fifthResponseEl.style.width='25%'

});



// ChartJS

const barWidth = 25;
const barRadius = 2.12;
const labels = ['Answer1', 'Answer2', 'Answer3', 'Answer4', 'Answer5', 'Answer5', 'Answer5', 'Answer6'];
const defaultDataValues = Array(labels.length).fill(100); // Default values set to 100
const data = {
  labels: labels,
  datasets: [{
    label: 'Dataset 1',
    data: defaultDataValues, // Set default data values
    backgroundColor: 'rgba(242, 244, 247, 1)',
    borderWidth: 0,
    barThickness: barWidth,
    borderRadius: barRadius,

  },
  {

    label: 'Dataset 2',
    backgroundColor: 'rgba(242, 244, 247, 1)',
    borderWidth: 0,
    barThickness: barWidth,
    borderRadius: barRadius,
    Image: [
      '../images/animi.png',
      '../images/animi (1).png',
      '../images/animi (2).png',
      '../images/animi (3).png',
      '../images/animi (4).png',
      '../images/animi (5).png',
      '../images/animi (6).png',
      '../images/animi (7).png'
    ]
  }]
};
const bgImage = {
  id: 'bgImage',
  beforeDataSetDraw: (chart, args, plugin) => {
    const { ctx, data } = chart;
    data.datasets[1].Image.forEach((image, index) => {
      console.log(image, index)
      const xPosition = chart.getDatasetMeta(1).data[index].x;


      const yPosition = chart.getDatasetMeta(1).data[index].y;
      const chartImage = new Image();
      chartImage.src = image;

      ctx.drawImage(chartImage, xPosition, yPosition, 30, 30, 30)
    })

  }
}


const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {

      x: {
        beginAtZero: false,
        grid: {
          color: 'rgba(251, 251, 251, 1)'
        }
      },
      y: {
        max: 100,
        ticks: {
          count: 11,
          callback: ((value, index, ticks) => {
            return value + '%';
          })
        },
        border: {
          dash: [3, 3],
          color: 'rgba(251, 251, 251, 1)'
        }
      }


    },
    plugins: {

      legend: {
        display: false
      },
      title: {
        display: false
      },

    }
  }
};

var myChart = new Chart(
  document.getElementById('myChart'),
  config
);


document.getElementById('myChart').addEventListener('click', function (event) {
  const activePoints = myChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);
  if (activePoints.length > 0) {
    const index = activePoints[0].index;
    const realData = [30, 50, 20, 10, 30, 30, 30, 70]; // Real data values
    myChart.data.datasets[1].data = realData;
    myChart.data.datasets[1].backgroundColor = [
      'rgba(117, 155, 228, 1)',
      'rgba(98, 0, 238, 1)',
      'rgba(133, 207, 136, 1)',
      'rgba(247, 166, 107, 1)',
      'rgba(206, 176, 250, 1)',
      'rgba(129, 51, 241, 1)',
      'rgba(206, 176, 250, 1)',
      'rgba(108, 174, 174, 1)'
    ];

    myChart.data.datasets[0].data = Array(labels.length).fill(0); // Set Dataset 1 data to 0
    myChart.update();



    //   bars.forEach((bar, index) => {
    //     const value = dataset.data[index];
    //     const img = new Image();
    //     img.src = '../images/animoji (1).png'; // Image URL
    //     img.onload = () => {
    //       ctx.drawImage(img, bar.x, bar.y - 20, bar.width, 20); // Adjust the position and size of the image
    //       ctx.fillText(value, bar.x + bar.width / 2, bar.y - 10); // Adjust the position of the text
    //     };
    // })

  }
});

//Question Bank slider 


const previousButton=document.querySelector('.preview-previous')
const nextButton =document.querySelector('.preview-next')

const questionDescriptionTitleEl= document.querySelector('.question-description');
const languagesDescriptionTitleEl =document.querySelector('.languages-description');
const firstSliderImgEl =document.querySelector('.sliderImg');
const secondSliderImgEl =document.querySelector('.sliderImgOne');

nextButton.addEventListener('click',()=>{
  if(!nextButton.classList.contains('disabledButton')){

    firstSliderImgEl.classList.add('firstSlidingImage');
    secondSliderImgEl.classList.add('secondSlidingImage');
    questionDescriptionTitleEl.classList.add('d-none');
    languagesDescriptionTitleEl.classList.remove('d-none');
    previousButton.classList.remove('disabledButton');
    nextButton.classList.add('disabledButton')
    
    // Remove classes to allow animation from the beginning
    firstSliderImgEl.classList.remove('slidingFirstBackImage');
    secondSliderImgEl.classList.remove('secondSlidingBackImage');

  }
})

previousButton.addEventListener('click',()=>{
 if(!previousButton.classList.contains('disabledButton')){

  firstSliderImgEl.classList.remove('firstSlidingImage');
  firstSliderImgEl.classList.add('slidingFirstBackImage');
  secondSliderImgEl.classList.remove('secondSlidingImage');
  secondSliderImgEl.classList.add('secondSlidingBackImage');

  questionDescriptionTitleEl.classList.remove('d-none')
  languagesDescriptionTitleEl.classList.add('d-none')
  nextButton.classList.remove('disabledButton')
  previousButton.classList.add('disabledButton')
 }

})





// carousels 

$('.first-carousel').owlCarousel({
  loop: true,
  rtl: true,
  autoplay: true,
  autoplayTimeout: 2000,
  nav: false,
  dots: false,
  dotsEach: false,
  autoplaySpeed: 1000,
  smartSpeed: 100,
  fallbackEasing: 'easeInOut',
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 4
    },
    1000: {
      items: 7
    }
  }
})

$(' .second-carousel').owlCarousel({
  loop: true,
  rtl: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplaySpeed: 1000,
  smartSpeed: 100,
  nav: false,
  dots: false,
  dotsEach: false,
  fallbackEasing: 'easeInOut',
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 4
    },
    1000: {
      items: 7
    }
  }
})


//Subscribe Background transition






const freeTrialSection = document.querySelector('.free-trial');
const trialMailEl =document.querySelector('.trial-mail');
const trialDescriptionEl =document.querySelector('.trial-description')


freeTrialSection.addEventListener('click', function (e) {
  if (!freeTrialSection.classList.contains('lastSection')) {
      
    freeTrialSection.classList.add('lastSection', 'scalingBackgroundBack', 'fade-out');
    trialMailEl.classList.add('animateMailBox')
    trialDescriptionEl.classList.add('animatedDescriptionText')
    freeTrialSection.addEventListener('animationend', function () {
    freeTrialSection.classList.remove('fade-out');
    
    }, { once: true });
    
} else {
  freeTrialSection.classList.remove('scalingBackgroundBack');
  freeTrialSection.classList.add('scalingUpBackground','fade-out')
        
  trialMailEl.classList.remove('animateMailBox')
    trialDescriptionEl.classList.remove('animatedDescriptionText')
    trialDescriptionEl.classList.add('animatedDescriptionTextBack')
    trialMailEl.classList.remove('animateMailBox')
    trialMailEl.classList.add('animateMailBoxBack')

  freeTrialSection.addEventListener('animationend', function () {

      freeTrialSection.classList.remove('lastSection', 'scalingUpBackground','fade-out');
      
  }, { once: true });

    }
});


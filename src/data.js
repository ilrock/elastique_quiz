const question = [
  {
    text: 'What color is the sky?',
    answers: [
      {
        text: 'red',
        correct: false
      },
      {
        text: 'yellow',
        correct: false
      },
      {
        text: 'blue',
        correct: true
      }
    ]
  },
  {
    text: 'How many days in a year?',
    answers: [
      {
        text: '300',
        correct: false
      },
      {
        text: '365',
        correct: false
      },
      {
        text: '366',
        correct: true
      }
    ]
  }
]

const leaderboard = [
  {
    name: 'Andrea',
    score: 343,
    avatar: 'https://api.adorable.io/avatars/23423432'
  },
  {
    name: 'Nina',
    score: 55,
    avatar: 'https://api.adorable.io/avatars/45'
  },
  {
    name: 'John',
    score: 43545,
    avatar: 'https://api.adorable.io/avatars/4534'
  },
  {
    name: 'Inge',
    score: 345,
    avatar: 'https://api.adorable.io/avatars/43543534'
  }
]

export { question, leaderboard }

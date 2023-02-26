const { createApp } = Vue

const contacts = [
  {
    name: 'Michele',
    avatar: './immagini/avatar.png',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Sei andato a fare la spesa?',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Ricordati di comprare i panni',
        status: 'sent'
      },
      {
        date: '10/01/2020 16:15:22',
        message: 'Tutto fatto))!',
        status: 'received'
      }
    ]
  },
  {
    name: 'Onofrio',
    avatar: './immagini/onofrio.jpeg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Hai compratom i pomodori?',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Ricordati  de prendere il pane',
        status: 'sent'
      },
      {
        date: '10/01/2020 16:15:22',
        message: 'Tutto fatto!',
        status: 'received'
      }
    ]
  },
  {
    name: 'Valentina',
    avatar: './immagini/avatar2.jpeg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 20:37:55',
        message: 'Vai in palestra domattina??',
        status: 'sent'
      },
      {
        date: '10/01/2020 22:00:00',
        message: 'Se ci vai passami a prendere ok?',
        status: 'sent'
      },
      {
        date: '10/01/2020 22:35:22',
        message: 'Ok  ok ti faccio sapere!',
        status: 'received'
      }
    ]
  },
  {
    name: 'Rebecca',
    avatar: './immagini/rebecca.jpeg',
    visible: true,
    messages: [
      {
        date: '8/01/2020 21:44:55',
        message: 'Che fai stasera?',
        status: 'sent'
      },
      {
        date: '8/01/2020 22:00:00',
        message: 'Ti va di fare una pizza??',
        status: 'sent'
      },
      {
        date: '8/01/2020 22:35:22',
        message: 'Ti scrivo tra poco e ti dico',
        status: 'received'
      }
    ]
  }

  

]

createApp({
  data() {
    return {
      contacts: contacts,
      activeChatIndex: 2,
    }
  },
  methods: {
    functionActiveIndex(index){
      this.activeChatIndex = index
    },
  }
}).mount('#app')


const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());

// Data News
const data = [
  {
    id: 1,
    title: "Coldplay Resmi Akan Manggung di Jakarta!",
    image: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    date: "15 May 2023",
    except: "Kenapa Sih?",
    description: [
      "Salah satu group musik asal Inggris, Coldplay, telah resmi mengumumkan pada sosial media @Coldplay bahwa akan diadakan konser tur dunia yang bertajuk “Music Of The Spheres” yang akan digelar pada beberapa negara bagian Asia dan Australia, salah satunya adalah Indonesia! Konser ini akan diselenggarakan pada 15 November 2023 di Gelora Bung Karno, Jakarta. Hal ini merupakan kedatangan perdana Coldplay ke Indonesia untuk menyapa para fans nya.",
      "Seperti yang kita tahu, Coldplay merupakan band group yang terdiri dari vokalis Chris Martin, bassis Guy Berryman, drummer Will Champion, dan Gitaris Jonny Buckland. Tentunya Sobat Muda udah gak asing dengan lagu populer mereka yaitu, “Fix You”, “Viva La Vida”, “Yellow”, dan masih banyak lagi.",
      "Kepastian terkait konser ini pun sudah diumumkan oleh Promotor PK Entertainment pada media sosialnya. Terdapat informasi terkait penjualan tiket yang akan dimulai pada 17-19 Mei 2023. PK Entertainment pun juga menginfokan layout konser dan tiket dapat dibeli pada situs coldplayinjakarta.com. Tiket pada konser ini telah dibagi menjadi 11 kategori. Harga tiket dimulai dari Rp 800.000 sampai dengan Rp 11.000.000"
    ]
  },
  {
    id: 2,
    title: "Coldplay Resmi Akan Manggung di Jakarta!",
    image: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    date: "15 May 2023",
    except: "Kenapa Sih?",
    description: [
      "Salah satu group musik asal Inggris, Coldplay, telah resmi mengumumkan pada sosial media @Coldplay bahwa akan diadakan konser tur dunia yang bertajuk “Music Of The Spheres” yang akan digelar pada beberapa negara bagian Asia dan Australia, salah satunya adalah Indonesia! Konser ini akan diselenggarakan pada 15 November 2023 di Gelora Bung Karno, Jakarta. Hal ini merupakan kedatangan perdana Coldplay ke Indonesia untuk menyapa para fans nya.",
      "Seperti yang kita tahu, Coldplay merupakan band group yang terdiri dari vokalis Chris Martin, bassis Guy Berryman, drummer Will Champion, dan Gitaris Jonny Buckland. Tentunya Sobat Muda udah gak asing dengan lagu populer mereka yaitu, “Fix You”, “Viva La Vida”, “Yellow”, dan masih banyak lagi.",
      "Kepastian terkait konser ini pun sudah diumumkan oleh Promotor PK Entertainment pada media sosialnya. Terdapat informasi terkait penjualan tiket yang akan dimulai pada 17-19 Mei 2023. PK Entertainment pun juga menginfokan layout konser dan tiket dapat dibeli pada situs coldplayinjakarta.com. Tiket pada konser ini telah dibagi menjadi 11 kategori. Harga tiket dimulai dari Rp 800.000 sampai dengan Rp 11.000.000"
    ]
  },
  
];

// Our Program 
const ourProgram = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        title: "Bicara Seputar Music",
        description: "Podcast horor yang akan menceritakan pengalaman-pengalaman horor yang pernah dialami oleh para M-Listener"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        title: "Bicara Seputar Music",
        description: "Podcast horor yang akan menceritakan pengalaman-pengalaman horor yang pernah dialami oleh para M-Listener"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        title: "Bicara Seputar Music",
        description: "Podcast horor yang akan menceritakan pengalaman-pengalaman horor yang pernah dialami oleh para M-Listener"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        title: "Bicara Seputar Music",
        description: "Podcast horor yang akan menceritakan pengalaman-pengalaman horor yang pernah dialami oleh para M-Listener"
    }
];

const ourTeam = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        title: "Manager"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        title: "Manager"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        title: "Manager"
    }
]



// Api List News
app.get('/api/news', async (req, res) => {
  try {
    const listNews = data.map(item =>
      ({
        id: item.id,
        title: item.title,
        image: item.image,
        date: item.date,
        except: item.except
        
    }))
    res.json(listNews);
  } catch (error) {
    res.status(500).send('Error retrieving news from API');
  }
})

// Api Detail News
app.get('/api/news/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const result = data.find(item => item.id === id);
  try {
    res.json(result);
  } catch (error) {
     res.status(500).send('Error retrieving news from API');
  }
})

// Api Programs
app.get('/api/programs', async (req, res) => {
  try {
    res.json(ourProgram);
  } catch (error) {
    res.status(500).send('Error retrieving news from API');
  }
})

// Api Our Teams
app.get('/api/team', async (req, res) => {
    try {
        res.json(ourTeam);
    } catch (error) {
        res.status(500).send('Error retriving Our Team from API')
    }
})

app.listen(port, () => {
  console.log(`Server Succes ${port}`);
})

const Header = () => {
  return (
    <header style={{ 
    textAlign: 'center', 
    padding: '20px', 
    backgroundColor: 'black', 
    color: 'white' }}>
      <h1>Movies</h1>
    </header>
  );
};

const Card = ({ image, title, description }) => {
  return (
    <div style={{
      width: '200px',
      margin: '10px',
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}>
      <img src={image} alt={title} style={{ 
        width: '100%', 
        height: '150px', 
        objectFit: 'cover', 
        borderRadius: '8px' 
        }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

function App  ()  {
  const cardsData = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsVh13Rmi0zf5dEgaGoySVhwp-6k-RwOxAOa3nzH0xZX4zN0zTm4BzYN526n6nHMQXa1g',
      title: 'My Name',
      description: 'When her father is murdered right in front of her eyes, a young woman abandons everything to join the criminal underworld and infiltrate the police force undercover—all to find and destroy the one who took her father from her.'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinaJUMTJovDh0C2fnpdgiqGp6-SSa6C6bVv-UmHRAfPsbQkyucn7UN2ZV_ZNYxWPlNj-a',
      title: 'Blood Hounds',
      description: 'Two young boxers band together with a benevolent moneylender to take down a ruthless loan shark who preys on the financially desperate.'
    },
    {
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSG_D30bamSBuT3WdlCsWpX-4oRvsOZQ2WwR8AQVipN9Uet2LTIpPZnD3voM6d2HYzJsRir',
      title: 'Mr.Plankton',
      description: 'A man plagued by misfortune and his ex, the unluckiest bride-to-be, are forced to accompany one another on the final journey of his life.'
    },
    {
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFQ2_Ko0rKgR2Vt2CbSZJKcEg3QvgZsryZDkyQWciZe09z6-iI',
        title: 'I Saw The Devil',
        description: 'When his pregnant fiancee is murdered, secret service agent Soo-hyun sets out to seek revenge. He identifies the killer and forces him to swallow a GPS-tracking capsule.',
    },
      {
        image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSvN65a1ZLe_1--6JX3D1CTan2B20EZmkuYOBtrNRepTENJTn2-',
        title: 'The Glory',
        description: 'A young woman, bullied to the point of deciding to drop out of school, plans the best way to get revenge. After becoming a primary school teacher, she takes in the son of the man who tormented her the most to enact her vengeance.',
      }
  ];

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cardsData.map((card, index) => (
          <Card 
            key={index}
            image={card.image}
            title={card.title}
            description={card.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;

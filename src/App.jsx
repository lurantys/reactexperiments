
import './App.css'
import Footer from './Footer.jsx'
import Card from  './facecard.jsx'
import Header from './Header.jsx'
function App() {
  return(
    <>
    <Header/>
    <Card
      picture="https://i.pinimg.com/736x/21/78/a0/2178a0582649a6943cd4e3c631adec34.jpg"
      desc="Gib me Breadies."
      title = "Cat"
      hiddendesc="Erm What The Sigma"
      typebadge="https://archives.bulbagarden.net/media/upload/c/c2/Fighting_icon_HOME3.png"
      sign = "https://archives.bulbagarden.net/media/upload/thumb/d/db/Bag_Rare_Candy_SV_Sprite.png/80px-Bag_Rare_Candy_SV_Sprite.png"
    />
  
    <Card
      picture = "https://i.pinimg.com/736x/53/44/9c/53449c59e75b8eec6730f5c50aed4f71.jpg"
      desc = "I am a doggo."
      title = "Gooby"
      hiddendesc="Gooby Goobert"
      typebadge="https://archives.bulbagarden.net/media/upload/2/23/Ghost_icon_HOME3.png"
      sign="https://archives.bulbagarden.net/media/upload/7/79/Pinani001.png"
    />
    <Card
      picture = "https://i.pinimg.com/736x/42/05/87/4205874f6e0aa9c1c02e3b542a2da295.jpg"
      desc = "I am a fish."
      title = "Fishy"
      hiddendesc="Blub Blub" 
      typebadge="https://archives.bulbagarden.net/media/upload/8/80/Water_icon_SwSh.png"
      sign="https://archives.bulbagarden.net/media/upload/thumb/c/cc/Body08.png/64px-Body08.png"
      />
    <Footer/>
    </>
  );
}

export default App

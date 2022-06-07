const { response } = require('express')
const { request } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const seaLife = {
    'humans':{
        'speciesName' : 'homo sapiens',
        'homeworld': 'Earth',
        'location' : 'Global',
        'features' : 'Rounded ears, hair on head and face (sometimes)',
        'interestingFact' : "The tongue is covered in about 8,000 taste-buds, each containing up to 100 cells helping you taste your food!,More than half of your bones are located in the hands, wrists, feet, and ankles.",
        'notableexamples' : 'Mike Tyson, Chadwick Boseman, Saul Gibson',
        'Dangerous Facts' : 'Careless, Reckless, selfish',
        'image' : 'https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    ' sea turtles':{
        'speciesName' : 'marine turtles',
        'homeworld': 'ocean',
        'location' : 'ocean and land',
        'features' : 'Shell, Flippers, oval shape head, glossy eyes',
        'interestingFact' : "They cannot retract into their shell like other turtles,Temperature dictates the sex of baby turtles,They can hold their breath for five hours underwater. ",
        'notableexamples' : 'Crush, Squirt, Michelangelo',
        'image' : 'https://media.wired.co.uk/photos/606da5037aff197af7c72f7a/master/w_1600,c_limit/mazaris1HR.jpg'
    },
    'hammer head':{
        'speciesName' : 'hammerhead',
        'homeworld': 'Earth',
        'location' : 'Ocean',
        'features' : 'hammer head, small eyes,fins, tail, and a lot of teeth',
        'interestingFact' : "The hammerhead species even have visual fields that overlap behind them, giving them a full 360 degree view of the world. Unlike many fish, hammerheads do not lay eggs. A female gives birth to live young. One litter can range from six to about 50 pups. When a hammerhead pup is born, its head is more rounded than its parents, The longest great hammerhead shark ever recorded was 20 feet (6.1 m) long, and the heaviest great hammerhead shark ever recorded was 991 pounds (450 kg).",
        'notableexamples' : 'Giuseppe',
        'image' : 'https://www.earthday.org/wp-content/uploads/2020/02/Hammerhead2-website-1024x358.jpg'
    },
    'great white shark':{
        'speciesName' : 'Great white shark',
        'homeworld': 'Earth',
        'location' : 'Ocean',
        'features' : 'Pointy nose, flippers and fin and tail, 30 feet long, small eyes, blind',
        'interestingFact' : "Great Whites are the largest predatory fish on earth,Sharks are much older than dinosaurs, They can leap out of the ocean 10 feet into the air.",
        'notableexamples' : 'Bruce, Shredder( legend of Guadalupe)',
        'image' : 'https://www.science.org/do/10.1126/science.aaz3311/full/shark_1280p.jpg'
    },
    'elephant Seals':{
        'speciesName' : 'Elephant Seal',
        'homeworld': 'Earth',
        'location' : 'Ocean',
        'features' : 'elephant seal pups are black until they are weaned at about 6 weeks old, and they molt and turn light silver. Adults are dark brown or gray. When males reach puberty at about 7 years old, they develop a large inflatable nose, or "proboscis." The proboscis overhangs their lower lip by about 8 inches',
        'interestingFact' : "THERE ARE TWO SEPARATE SPECIES ...AND ONE NEARLY WENT EXTINCT, THEY'VE DONE SOME VOICE ACTING, A DESTRUCTIVE ELEPHANT SEAL IN NEW ZEALAND LOVED CARS TO A FAULT.",
        'notableexamples' : 'Bryan the Beachmaster, Shane, Darren',
        'image' : 'https://elephantseal.org/wp-content/uploads/2020/05/what-is.jpg'
    },
    'orcas':{
        'speciesName' : 'Killer Whales',
        'homeworld': 'Earth',
        'location' : 'Ocean',
        'features' : 'Orcas are distinctively coloured. The dorsal surface is mostly black except for a grey or white saddle patch behind the dorsal fin. The underside of the body and underside of flukes are white and there is a white eyespot behind each eye',
        'interestingFact' : "Orcas are the largest member of the dolphin family, Orca Clans Speak Different Languages, They Go Through Menopause.",
        'notableexamples' : 'Mike Tyson, Chadwick Boseman, Saul Gibson',
        'image' : 'https://i.guim.co.uk/img/media/07fe2af30462bfdde004c0d7535c2c76ceafee09/335_531_3485_2091/master/3485.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=2e76cfa00ec321385d2cf1d929ea7594'
    },
    'clownfish':{
        'speciesName' : 'anemonefish',
        'homeworld': 'Earth',
        'location' : 'Ocean',
        'features' : 'Their body color is a bright orange with three white bars, the middle with a forward bulge centrally. Thick black bands around the white bars separate the orange and white portions of the body. The bands range from a thick line to patches of black on the sides of the fish. The fins of this species have black tips.',
        'interestingFact' : "The tongue is covered in about 8,000 taste-buds, each containing up to 100 cells helping you taste your food!,More than half of your bones are located in the hands, wrists, feet, and ankles.",
        'notableexamples' : 'Marlin, Nemo',
        'image' : 'https://cdn.theatlantic.com/thumbor/cE9W6XBmyMfXOaHAs_dMYWVtZrI=/0x100:3456x2044/960x540/media/img/2014/05/shutterstock_141051217/original.jpg'
    },
    'blue tang':{
        'speciesName' : 'Royal Blue Tang',
        'homeworld': 'Earth',
        'location' : 'Ocean',
        'features' : 'Blue tangs are high-bodied, compressed, pancake-shaped fishes with pointed snouts and small scales. Their eyes are located high on their heads and their mouths are small and positioned low. Their dorsal fins are continuous.',
        'interestingFact' : "Reefs couldn’t survive without fish like the blue tang, Blue tangs are very social fish, Blue tangs are actually quite dangerous!",
        'notableexamples' : 'Dory',
        'image' : 'https://epicaquarium.com/wp-content/uploads/2021/03/powder-blue-tang-fish-aquarium.jpg'
    },
    'frilled shark':{
        'speciesName' : 'Frilled shark',
        'homeworld': 'Earth',
        'location' : 'African Ocean',
        'features' : 'They are dark brown or gray in color above, sometimes lighter below, and have six pairs of “frilly” gill slits where the first gill slit is joined under their jaws forming a sort of collar. Frilled sharks heads are broad and flattened with short, rounded snouts.',
        'interestingFact' : "IT WAS DISCOVERED IN THE 19TH CENTURY,IT’S FOUND ALL OVER THE WORLD—BUT YOU PROBABLY WON’T SEE IT,  IT CALLS ANOTHER FREAKY SHARK ITS COUSIN(Goblin Shark)",
        'notableexamples' : 'None',
        'image' : 'https://media.kidadl.com/large_609506c186fd7860142ab0ae_the_deep_sea_frilled_shark_looks_like_a_snake_ed33f5789a.jpg'
    },
    'monk seal':{
        'speciesName' : 'Monk Seal',
        'homeworld': 'Earth',
        'location' : 'Ocean',
        'features' : 'The seals are born with a black lanugo—a fur coat found on some infant mammals. They shed this as they grow, and as adults, they have dark gray backs and light-colored bellies. Hawaiian monk seals are 7 to 7.5 feet (2.1 to 2.2 meters) in length, with females larger than males',
        'interestingFact' : "Monk seals are the only earless seals found in tropical climates,  monk seals are apex predators and serve to control levels of numerous prey populations to maintain a healthy functioning ecosystem, There are two living species of monk seals: Hawaiian monk seal (Monachus schauinslandi) and Mediterranean monk seal (Monachus monachus). A third species, the Caribbean monk seal (Monachus tropicalis) is believed to be extinct, no individuals have been observed since the early 1950s.",
        'notableexamples' : 'Whiskers(Manta and Moray)',
        'image' : 'https://media.fisheries.noaa.gov/dam-migration/hawaiian_monk_seal.jpg'
    },
    'dolphin':{
        'speciesName' : 'Doplhin',
        'homeworld': 'Earth',
        'location' : 'Ocean',
        'features' : 'Dolphins have conical teeth, a defined beak, a pronounced bulbous forehead, a more streamlined body, and a curved dorsal fin while porpoises have spade-shaped teeth, a rounded head and triangular dorsal fins. They are also generally smaller than dolphins.',
        'interestingFact' : "There are currently 42 species of dolphins and seven species of porpoises, A dolphin pregnancy last between nine and 16 months , The orca (killer whale) is the largest dolphin.",
        'notableexamples' : 'Flipper, Winter',
        'image' : 'https://images.newscientist.com/wp-content/uploads/2018/06/27172924/bhabab.jpg?crop=4:3,smart&width=1200&height=900&upscale=true'
    }
     
    
}

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:animalName', (req,res) =>{
    const animalsName = req.params.animalName.toLowerCase()

    if(seaLife[animalsName]){
        res.json(seaLife[animalsName])
    } else {
        res.json(seaLife['human'])

    }

})

app.listen(process.env.PORT || PORT, () =>{
           console.log("The Server is Swimming Smoothly")
})

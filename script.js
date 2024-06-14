const placename = [
    "TAJ MAHAL",
    "RED FORT",
    "GOLDEN TEMPLE",
    "QUTUB MINAR",
    "CHARMINAR",
    "INDIA GATE",
    "SUN TEMPLE",
    "VICTORIA MEMORIAL",
    "MYSORE PALACE",
    "HAMPI",
    "GOLKONDA FORT",
    "GWALIOR FORT"
];

const imglink = [
    "./assets/images/1.jpg",
    "./assets/images/2.jpg",
    "./assets/images/3.jpg",
    "./assets/images/4.jpg",
    "./assets/images/5.jpg",
    "./assets/images/6.jpg",
    "./assets/images/7.jpg",
    "./assets/images/8.jpg",
    "./assets/images/9.jpg",
    "./assets/images/10.jpg",
    "./assets/images/11.jpg",
    "./assets/images/12.jpg"
];

const placedescription = [
    "The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. Completed in 1653, it is a UNESCO World Heritage Site and one of the New Seven Wonders of the World. The Taj Mahal combines elements from Islamic, Persian, Ottoman Turkish, and Indian architectural styles. The complex includes a mosque, guest house, and extensive gardens. It symbolizes eternal love and is an architectural marvel known for its symmetry and intricate details. The mausoleum's central dome is surrounded by four minarets. Visitors from around the world come to admire its beauty and craftsmanship. The Taj Mahal is also known for its stunning reflection in the pool in front of it. The changing light conditions during different times of the day add to its charm. The Taj Mahal is not just a symbol of love, but also an example of the incredible skills of the artisans of the time.",
    "Red Fort, or Lal Qila, is a historic fort in Delhi, India, serving as the main residence of Mughal Emperors for nearly 200 years. Constructed by Emperor Shah Jahan in 1639, it is a UNESCO World Heritage Site. The fort's massive red sandstone walls enclose various structures, including the Diwan-i-Aam and Diwan-i-Khas, which were used for public and private audiences. The fort features beautiful gardens, palaces, and a museum. It symbolizes the Mughal era's architectural brilliance and historical significance. The annual Independence Day celebrations are held here. The fort's Lahore Gate is a major symbol of the nation's sovereignty. Inside the fort, the Naubat Khana or Drum House stands at the entrance. The Moti Masjid, or Pearl Mosque, adds to the fort's splendor. The fort also has a sound and light show that narrates its history. The Red Fort's architecture is a blend of Persian, Timurid, and Indian styles, making it a unique monument in India's heritage.",
    "The Golden Temple, or Harmandir Sahib, is the holiest Gurdwara of Sikhism, located in Amritsar, Punjab, India. It was founded by Guru Ram Das in 1577 and completed by Guru Arjan in 1604. The temple's stunning architecture combines Islamic, Hindu, and European influences. Its central shrine, covered in gold, is surrounded by a sacred pool known as the Amrit Sarovar. The temple complex also houses the Akal Takht, the highest seat of earthly authority of the Khalsa. The Golden Temple is a symbol of human brotherhood and equality, welcoming people of all faiths. The temple's four entrances symbolize openness to all. The daily rituals include continuous recitation of the Guru Granth Sahib. The Langar, a community kitchen, serves free meals to all visitors. The temple complex is beautifully illuminated at night. The Harmandir Sahib is not just a religious site but also a cultural and historical landmark. Its architecture and the serene ambiance leave a lasting impression on visitors. The Golden Temple stands as a beacon of spiritual and temporal values.",
    "Qutub Minar is a UNESCO World Heritage Site located in Delhi, India. It is the tallest brick minaret in the world, standing at 73 meters (240 feet). Construction began in 1193 by Qutb-ud-din Aibak and was completed by his successor Iltutmish. The tower features five distinct storeys, each with a projecting balcony, and is adorned with intricate carvings and inscriptions in Arabic. The surrounding Qutub Complex includes several historical structures, such as the Quwwat-ul-Islam Mosque and the Iron Pillar. The Qutub Minar symbolizes the advent of Muslim rule in India. The tower is a fine example of Indo-Islamic Afghan architecture. The minaret's fluted columns and engraved inscriptions narrate its history. The Alai Darwaza, a magnificent gateway, stands nearby. The Iron Pillar, known for its rust-resistant properties, is a scientific marvel. The Qutub Minar complex is a popular tourist destination, attracting history enthusiasts and architecture lovers. The lush gardens around the minaret add to its beauty. The Qutub Minar has survived several earthquakes, a testament to its robust construction. The site's historical significance and architectural brilliance make it a must-visit monument.",
    "Charminar, an iconic monument located in Hyderabad, India, was built in 1591 by Muhammad Quli Qutb Shah. The structure, with its four grand arches and minarets, is a symbol of Hyderabad's rich history and culture. It served as a mosque and a madrasa, and its location marks the intersection of the city's historical trade routes. The Charminar area is a bustling market known for its traditional jewelry, pearls, and vibrant bazaars. The monument's Indo-Islamic architecture features intricate stucco decorations and is a popular tourist attraction and heritage site. The Charminar stands at the heart of the old city. Each minaret rises to a height of 56 meters (184 feet). The monument offers panoramic views of Hyderabad. The surrounding Laad Bazaar is famous for bangles. The Charminar is illuminated at night, highlighting its architectural beauty. The monument has inspired several replicas around the world. The Charminar is also a venue for local festivals and celebrations. Its construction is associated with the end of a deadly plague. The Charminar's charm lies in its blend of history, culture, and commerce.",
    "India Gate is a war memorial located in New Delhi, India, commemorating the soldiers of the British Indian Army who died during World War I. Designed by Sir Edwin Lutyens, it was completed in 1931. The 42-meter-high arch stands at the heart of New Delhi and features the names of over 13,000 soldiers inscribed on its surface. The Amar Jawan Jyoti, or Flame of the Immortal Soldier, was added after India's independence to honor the unknown soldiers. India Gate is a prominent landmark and a symbol of national pride and remembrance. The structure is surrounded by lush lawns, making it a popular spot for picnics. The Republic Day parade passes through India Gate. The monument is illuminated at night, creating a stunning visual. The canopy nearby once housed a statue of King George V. India Gate's design is reminiscent of the Arc de Triomphe in Paris. The site attracts tourists and locals alike. India Gate also serves as a venue for various events and gatherings. The monument stands as a testament to the bravery and sacrifice of Indian soldiers. It continues to inspire patriotism and respect for the armed forces.",
    "The Sun Temple, also known as the Konark Sun Temple, is a 13th-century temple located in Konark, Odisha, India. It was built by King Narasimhadeva I and is dedicated to the Hindu sun god Surya. The temple is designed in the shape of a colossal chariot with intricately carved stone wheels, pillars, and walls. It is a UNESCO World Heritage Site and an architectural marvel of ancient India. The temple complex includes the main sanctum, audience hall, and a dance pavilion. The annual Konark Dance Festival celebrates classical Indian dance forms. The temple's sculptures depict various aspects of life and mythology. The structure's alignment allows the first rays of the sun to strike the main entrance. The Konark Sun Temple is also known for its erotic sculptures. The temple has been partially ruined but retains its grandeur. The nearby Chandrabhaga Beach adds to the site's appeal. The temple's design reflects advanced knowledge of architecture and astronomy. The Konark Sun Temple is often referred to as the Black Pagoda due to its dark color. It remains a significant pilgrimage site for Hindus and a major tourist attraction.",
    "Victoria Memorial, located in Kolkata, West Bengal, India, is a grand marble building dedicated to the memory of Queen Victoria. Commissioned in 1906 and completed in 1921, it was designed by Sir William Emerson in the Indo-Saracenic revivalist style. The memorial features a large central dome, elegant sculptures, and expansive gardens. It houses a museum with a rich collection of paintings, artifacts, and manuscripts from the British colonial period. The Victoria Memorial is a symbol of Kolkata's colonial heritage and a prominent tourist attraction. The structure's white Makrana marble gives it a striking appearance. The Angel of Victory, atop the central dome, rotates with the wind. The lush gardens surrounding the memorial are perfect for leisurely strolls. Inside, the Royal Gallery displays portraits of Queen Victoria and Prince Albert. The memorial also hosts cultural events and exhibitions. The sound and light show narrates the history of Kolkata and the British Raj. The Victoria Memorial is an architectural marvel blending Mughal and European elements. It stands as a reminder of India's colonial past and its journey towards independence.",
    "Mysore Palace, located in Mysore, Karnataka, India, is a historical palace and the official residence of the Wadiyar dynasty. Originally built in the 14th century, it was reconstructed in 1912 by British architect Henry Irwin. The palace's Indo-Saracenic architecture combines Hindu, Muslim, Rajput, and Gothic styles. Its lavish interiors feature intricately carved wooden doors, stained glass ceilings, and beautiful frescoes. The palace is illuminated with thousands of lights during the Dussehra festival, attracting millions of visitors. Mysore Palace is a symbol of the region's rich cultural and architectural heritage. The palace grounds also house several temples. The Durbar Hall is known for its ornate ceilings and chandeliers. The palace's Kalyana Mantapa (wedding hall) features a stained glass ceiling. The Golden Throne is a major attraction within the palace. The Mysore Palace is surrounded by expansive gardens. The annual Dussehra procession starts from the palace grounds. The sound and light show narrates the history of the Wadiyars. The palace's artwork and artifacts offer a glimpse into royal life. Mysore Palace remains one of India's most visited tourist attractions.",
    "Hampi, a UNESCO World Heritage Site, is an ancient village in Karnataka, India, known for its well-preserved ruins of the Vijayanagara Empire. Once the capital of a powerful South Indian dynasty, Hampi features numerous temples, palaces, and market streets. The Virupaksha Temple, Vittala Temple with its iconic stone chariot, and the Lotus Mahal are notable structures. The landscape is dotted with boulder-strewn hills and the Tungabhadra River. Hampi is a significant archaeological and historical site, offering insights into the grandeur of the Vijayanagara Empire. The ruins span an area of 26 square kilometers. The Elephant Stables reflect the empire's wealth and power. The Hampi Bazaar was once a thriving trade center. The Mahanavami Dibba is a grand platform used for royal ceremonies. The Hazara Rama Temple is known for its intricate carvings. Hampi's architecture blends Dravidian and Islamic styles. The annual Hampi Utsav celebrates the region's cultural heritage. The Matanga Hill offers panoramic views of the ruins. Hampi's rich history and scenic beauty make it a must-visit destination for history enthusiasts.",
    "Golkonda Fort, located near Hyderabad, Telangana, India, is a historic fort known for its architectural grandeur and strategic importance. Built in the 16th century by the Qutb Shahi dynasty, the fort is famous for its acoustics, palaces, and the famous Fateh Rahben gun. It served as a thriving center for diamond trade, producing the world-famous Koh-i-Noor diamond. The fort's massive walls, gateways, and ramparts are impressive, and it offers panoramic views of the surrounding landscape. Golkonda Fort is a testament to the region's rich history and cultural heritage. The fort complex includes the ruins of the Qutb Shahi palaces. The sound and light show narrates its history. The fort's acoustics allowed sound to be heard clearly from one end to another. The Bala Hissar Gate is the main entrance. The Taramati Mosque and the mortuary baths are notable structures. The Golkonda mines produced some of the most famous diamonds. The fort's water supply system was advanced for its time. The climb to the top offers breathtaking views. Golkonda Fort remains a popular tourist destination.",
    "Gwalior Fort, situated in Gwalior, Madhya Pradesh, India, is a historic hill fort known for its impressive architecture and historical significance. Dating back to the 6th century, the fort has witnessed numerous battles and has been ruled by various dynasties. The fort complex includes several palaces, temples, and water tanks. Notable structures include the Man Singh Palace, known for its intricate tile work, and the Sas Bahu Ka Mandir. The fort offers panoramic views of Gwalior city and is a symbol of the region's rich history and architectural heritage. The fort's entrance is adorned with beautiful Jain sculptures. The Teli Ka Mandir is one of the tallest structures in the fort. The Gwalior Fort has seen the reign of the Tomars, Mughals, Marathas, and the British. The fort's architecture is a blend of Hindu and Islamic styles. The fort complex also houses a Gurudwara and a museum. The annual Gwalior Trade Fair is held near the fort. The sound and light show narrates its history. The fort's strategic location made it a coveted possession for many rulers. Gwalior Fort remains a testament to India's rich cultural heritage."
];


document.getElementById('places-select').addEventListener('change', function(e) {
    let placevalue = Number(e.target.value);
    if (placevalue === 0) {
        window.location.reload();
    } else {
        document.getElementById("displayarea").innerHTML = `
            <img src="${imglink[placevalue - 1]}" alt="${placename[placevalue - 1]}">
            <div class='textareas'>
                <h1>${placename[placevalue - 1]}</h1>
                <p>${placedescription[placevalue-1]}</p>
            </div>
        `;
    }
});

document.getElementById('about').addEventListener('click', function(){
    document.getElementById("displayarea").innerHTML=`
    <div class="aboutpage">
        <h1> ABOUT </h1><br/><br/>
        <span>
        I'm Nitish , a history enthusiast and travel aficionado who's passionate about exploring India's rich cultural heritage. Growing up, I was fascinated by the stories of India's ancient civilizations, majestic monuments, and vibrant cultural traditions. After years of traveling across the country, I realized that there was a need for a comprehensive online resource that showcases India's incredible historical places.<br/><br/>

        That's why I created Historical Places of India, a website dedicated to promoting cultural awareness, preserving history, and inspiring travel to these incredible destinations. Our mission is to provide a one-stop resource for anyone interested in exploring India's historical heritage, from the ancient Indus Valley Civilization to the modern era.<br/><br/>

        Our website features in-depth articles, stunning images, and interactive maps that cover a wide range of historical places across India. From the Taj Mahal to the Hampi ruins, we've got you covered. Our team of experts and contributors are passionate about history and committed to providing accurate, engaging, and informative content.<br/><br/>

        Whether you're a history buff, a travel enthusiast, or simply curious about India's cultural heritage, we hope you'll find our website a valuable resource. Explore our website, and let us inspire you to discover the wonders of India's historical places.
        </span>
    `
});

document.getElementById('contact').addEventListener('click', function(){
    document.getElementById("displayarea").innerHTML=`
        <div class="contactpage">
            <div class=leftpage>
                <h1>We're here</h1>
                <p>Our door is always open for a good cup of cofee</p>
            </div>
            <div class=rightpage>
                <h1>Let's talk.</h1>
                <p>share your excitment with us.</p>
                <a href= "mailto: katteboyinanitish@gmail.com">katteboyinanitish@gmail.com</a>
            </div>
        </div>
    `
});



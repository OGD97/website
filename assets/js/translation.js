const translations = {
    en: {
        paragraph: "Hello, I'm Omar, a seasoned front-end developer and graphic designer based in Germany. I began my journey in 2016, honing my skills during a Turkish Language Course and later earning a degree in Computer Engineering from Çankaya University in 2021. Currently, I work as a freelance graphic designer and web developer, engaging in side projects to further expand my knowledge.\n\nPassionate about technology, digital design, and arts, I also advocate for animal welfare. My goal as a graphic designer is to craft visually compelling designs that effectively convey messages. Proficient in Adobe Creative Suite, including Photoshop and Illustrator, I specialize in print design, branding, and typography. Collaborating closely with clients, I bring their visions to life with meticulous attention to detail and a keen sense of design aesthetics.\n\nOn the web development front, I excel in HTML, CSS, JavaScript, and various programming languages, with experience in WordPress and responsive design. Keeping pace with the latest trends, I deliver high-quality, user-centric solutions tailored to diverse needs. Eager to take on new challenges, I'm seeking an opportunity to contribute my skills and experience to a dynamic company, driving innovation and success. Committed to delivering top-notch results, I am excited about the prospect of joining a team that values excellence, creativity, and positive impact.",
        contact: "",
    },
    de: {
        paragraph: "Hallo, ich bin Omar, ein erfahrener Frontend-Entwickler und Grafikdesigner mit Sitz in Deutschland. Meine Reise begann im Jahr 2016, als ich während eines Türkischsprachkurses meine Fähigkeiten verfeinerte und später 2021 einen Abschluss in Computertechnik von der Çankaya-Universität erwarb. Derzeit arbeite ich als freiberuflicher Grafikdesigner und Webentwickler und beschäftige mich mit Nebenprojekten, um mein Wissen weiter zu vertiefen.\n\nLeidenschaftlich für Technologie, digitales Design und Kunst setze ich mich auch für den Tierschutz ein. Mein Ziel als Grafikdesigner ist es, visuell ansprechende Designs zu gestalten, die Botschaften effektiv vermitteln. Mit fundierten Kenntnissen in der Adobe Creative Suite, einschließlich Photoshop und Illustrator, habe ich mich auf Druckdesign, Branding und Typografie spezialisiert. In enger Zusammenarbeit mit meinen Kunden erwecke ich ihre Visionen mit großer Sorgfalt und einem ausgeprägten Sinn für Designästhetik zum Leben.\n\nIm Bereich der Webentwicklung beherrsche ich HTML, CSS, JavaScript und verschiedene Programmiersprachen und habe Erfahrung mit WordPress und responsivem Design. Ich halte mich stets auf dem neuesten Stand der aktuellen Trends und liefere qualitativ hochwertige, benutzerzentrierte Lösungen, die auf unterschiedliche Bedürfnisse zugeschnitten sind. Immer bereit für neue Herausforderungen, suche ich nach einer Gelegenheit, meine Fähigkeiten und Erfahrungen in einem dynamischen Unternehmen einzubringen, das Innovation und Erfolg vorantreibt. Engagiert für erstklassige Ergebnisse, freue ich mich darauf, Teil eines Teams zu werden, das Exzellenz, Kreativität und positive Auswirkungen schätzt.",
        contact: "Zögern Sie nicht, mich per E-Mail zu kontaktieren!\n\nFür weitere Informationen können Sie meinen Lebenslauf herunterladen, indem Sie auf den untenstehenden Button klicken ^_^",
        button: "Hier herunterladen"
    },
    ar: {
        paragraph: "     \n\n    مرحبًا، أنا عمر، مطور ومصمم جرافيك ذو خبرة ومقيم في ألمانيا. بدأت رحلتي في عام 2016، حيث طورت مهاراتي خلال دورة لتعلم اللغة التركية، وحصلت لاحقًا على درجة البكالوريوس في هندسة الحاسوب من جامعة شانكايا في عام 2021. أعمل حاليًا كمصمم جرافيك مستقل ومطور مواقع ويب، وأشارك في مشاريع جانبية لتعزيز معرفتي.      \n\n أشعر بشغف تجاه التكنولوجيا، التصميم الرقمي والفنون، وأدافع أيضًا عن رفاهية الحيوانات. هدفي كمصمم جرافيك هو إنشاء تصاميم جذابة بصريًا تنقل الرسائل بفعالية. أجيد استخدام مجموعة Adobe Creative Suite، بما في ذلك Photoshop وIllustrator، وأتخصص في تصميم المطبوعات، العلامات التجارية، والطباعة. من خلال التعاون الوثيق مع العملاء، أحوّل رؤاهم إلى حقيقة مع اهتمام دقيق بالتفاصيل وحس جمالي متميز. \n\n في مجال تطوير الويب، أتقن HTML، CSS، JavaScript، والعديد من لغات البرمجة، ولدي خبرة في WordPress والتصميم المتجاوب. أواكب أحدث الاتجاهات وأقدم حلولًا عالية الجودة تتمحور حول المستخدم وتتناسب مع احتياجات متنوعة. أتطلع إلى مواجهة تحديات جديدة وأسعى للانضمام إلى شركة ديناميكية أساهم فيها بمهاراتي وخبراتي، لدفع الابتكار وتحقيق النجاح. ملتزم بتقديم نتائج عالية الجودة، وأنا متحمس لفكرة الانضمام إلى فريق يقدّر التميز، الإبداع، والأثر الإيجابي.",
        contact: "",
    }
}


const langSelect = document.querySelector("select");

let p = document.getElementById("paragraph");

let contact = document.getElementById("contact");

let button = document.getElementById("button");


langSelect.addEventListener("change", (event)=> {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if(language == "en")
    {
        p.innerText = translations.en.paragraph;

        button.innerText = translations.en.button;
        
        document.getElementById("paragraph").style.direction = "ltr";
    }
    else if (language == "de")
    {
        p.innerText = translations.de.paragraph;

        button.innerText = translations.de.button;
        
        
        document.getElementById("paragraph").style.direction = "ltr";
    }
    else if (language == "tr")
    {
        p.innerText = translations.tr.paragraph;


        document.getElementById("paragraph").style.direction = "ltr";

        button.innerText = translations.tr.button;

        
    }
    else if (language == "ar")
    {
        p.innerText = translations.ar.paragraph;


        document.getElementById("paragraph").style.direction = "rtl";
    }
 

}
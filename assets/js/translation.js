const translations = {
    en: {
        title: "About",
        paragraph: "Hello, I'm Omar, a seasoned front-end developer and graphic designer based in Germany. I began my journey in 2016, honing my skills during a Turkish Language Course and later earning a degree in Computer Engineering from Çankaya University in 2021. Currently, I work as a freelance graphic designer and web developer, engaging in side projects to further expand my knowledge.\n\nPassionate about technology, digital design, and arts, I also advocate for animal welfare. My goal as a graphic designer is to craft visually compelling designs that effectively convey messages. Proficient in Adobe Creative Suite, including Photoshop and Illustrator, I specialize in print design, branding, and typography. Collaborating closely with clients, I bring their visions to life with meticulous attention to detail and a keen sense of design aesthetics.\n\nOn the web development front, I excel in HTML, CSS, JavaScript, and various programming languages, with experience in WordPress and responsive design. Keeping pace with the latest trends, I deliver high-quality, user-centric solutions tailored to diverse needs. Eager to take on new challenges, I'm seeking an opportunity to contribute my skills and experience to a dynamic company, driving innovation and success. Committed to delivering top-notch results, I am excited about the prospect of joining a team that values excellence, creativity, and positive impact.",
        contact: "For further information, you can download my CV by clicking on the button below ^_^",
        button: "Download here "

    },
    de: {
        title: "Über mich",
        paragraph: "Hallo, ich bin Omar, ein erfahrener Frontend-Entwickler und Grafikdesigner mit Sitz in Deutschland. Meine Reise begann im Jahr 2016, als ich während eines Türkischsprachkurses meine Fähigkeiten verfeinerte und später 2021 einen Abschluss in Computertechnik von der Çankaya-Universität erwarb. Derzeit arbeite ich als freiberuflicher Grafikdesigner und Webentwickler und beschäftige mich mit Nebenprojekten, um mein Wissen weiter zu vertiefen.\n\nLeidenschaftlich für Technologie, digitales Design und Kunst setze ich mich auch für den Tierschutz ein. Mein Ziel als Grafikdesigner ist es, visuell ansprechende Designs zu gestalten, die Botschaften effektiv vermitteln. Mit fundierten Kenntnissen in der Adobe Creative Suite, einschließlich Photoshop und Illustrator, habe ich mich auf Druckdesign, Branding und Typografie spezialisiert. In enger Zusammenarbeit mit meinen Kunden erwecke ich ihre Visionen mit großer Sorgfalt und einem ausgeprägten Sinn für Designästhetik zum Leben.\n\nIm Bereich der Webentwicklung beherrsche ich HTML, CSS, JavaScript und verschiedene Programmiersprachen und habe Erfahrung mit WordPress und responsivem Design. Ich halte mich stets auf dem neuesten Stand der aktuellen Trends und liefere qualitativ hochwertige, benutzerzentrierte Lösungen, die auf unterschiedliche Bedürfnisse zugeschnitten sind. Immer bereit für neue Herausforderungen, suche ich nach einer Gelegenheit, meine Fähigkeiten und Erfahrungen in einem dynamischen Unternehmen einzubringen, das Innovation und Erfolg vorantreibt. Engagiert für erstklassige Ergebnisse, freue ich mich darauf, Teil eines Teams zu werden, das Exzellenz, Kreativität und positive Auswirkungen schätzt.",
        contact: "Für weitere Informationen können Sie meinen Lebenslauf herunterladen, indem Sie auf den untenstehenden Button klicken ^_^",
        button: "Hier herunterladen"
    },
    tr: {
        title: "Hakkımda",
        paragraph: "",
        contact: "Bana e-posta yoluyla ulaşmaktan çekinmeyin!\n\nDaha fazla bilgi için aşağıdaki butona tıklayarak CV'mi indirebilirsiniz ^_^",
        button: "Indir"
    },

    ar: {
        title: "مين أنا؟",
        paragraph: "     \n\n    اهلين، أنا عمر، مطور ومصمم جرافيك ذو خبرة ومقيم حالياً في ألمانيا. بدأت رحلتي في عام 2016، حيث طورت مهاراتي خلال دورة لتعلم اللغة التركية، وحصلت لاحقًا على درجة البكالوريوس في هندسة الحاسوب من جامعة شانكايا في عام 2021. أعمل حاليًا كمصمم جرافيك ومطور مواقع ويب، وأشارك في مشاريع جانبية لتعزيز معرفتي.      \n\n أشعر بشغف تجاه التكنولوجيا، التصميم الرقمي والفنون، وأدافع أيضًا عن رفاهية الحيوانات. هدفي كمصمم جرافيك هو إنشاء تصاميم جذابة بصريًا تنقل الرسائل بفعالية. أجيد استخدام مجموعة Adobe Creative Suite، بما في ذلك Photoshop وIllustrator، وأتخصص في تصميم المطبوعات، العلامات التجارية، والطباعة. من خلال التعاون الوثيق مع العملاء، أحوّل رؤاهم إلى حقيقة مع اهتمام دقيق بالتفاصيل وحس جمالي متميز. \n\n في مجال تطوير الويب، أتقن HTML، CSS، JavaScript، والعديد من لغات البرمجة، ولدي خبرة في WordPress والتصميم المتجاوب. أواكب أحدث الاتجاهات وأقدم حلولًا عالية الجودة تتمحور حول المستخدم وتتناسب مع احتياجات متنوعة. أتطلع إلى مواجهة تحديات جديدة وأسعى للانضمام إلى شركة ديناميكية أساهم فيها بمهاراتي وخبراتي، لدفع الابتكار وتحقيق النجاح. ملتزم بتقديم نتائج عالية الجودة، وأنا متحمس لفكرة الانضمام إلى فريق يقدّر التميز، الإبداع، والأثر الإيجابي.",
        contact: "لا تتردد في التواصل معي عبر البريد الإلكتروني!\n\n لمزيد من المعلومات، يمكنك تحميل الCV من خلال الضغط على الزر أدناه ^_^ \n\n",
        button: "تحميل"
    }
}


const langSelect = document.querySelector("select");

let p = document.getElementById("paragraph");

let contact = document.getElementById("contact");

let button = document.getElementById("button");

let title = document.getElementById("title");

langSelect.addEventListener("change", (event)=> {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {

    if(language == "en")
    {
        p.innerText = translations.en.paragraph;
        button.innerText = translations.en.button;
        contact.innerText = translations.en.contact;
        title.innerText = translations.en.title;
        
        document.getElementById("paragraph").style.direction = "ltr";
    }
    else if (language == "de")
    {
        p.innerText = translations.de.paragraph;
        button.innerText = translations.de.button;
        contact.innerText = translations.de.contact;
        title.innerText = translations.de.title;
        
        
        document.getElementById("paragraph").style.direction = "ltr";
    }
    else if (language == "tr")
    {
        p.innerText = translations.tr.paragraph;
        button.innerText = translations.tr.button;
        contact.innerText = translations.tr.contact;
        title.innerText = translations.tr.title;

        document.getElementById("paragraph").style.direction = "ltr";


        
    }
    else if (language == "ar")
    {
        p.innerText = translations.ar.paragraph;
        button.innerText = translations.ar.button;
        contact.innerText = translations.ar.contact;
        title.innerText = translations.ar.title;

        document.getElementById("paragraph").style.direction = "rtl";
        document.getElementById("contact").style.direction = "rtl";
    }
 

}
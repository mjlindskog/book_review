const { Books } = require('../model');

const allBooks = [
    {
        "book_title":"The Hobbit",
        "author":"J.R.R. Tolkien",
    },
    {
        "book_title":"Harry Potter and the Philosopher's Stone",
        "author":"J.K. Rowling",
    },
    // {
    //     "book_title":"The Little Prince",
    //     "author":"Antoine de Saint-Exupéry",
    // },
    // {
    //     "book_title":"Dream of the Red Chamber",
    //     "author":"Cao Xueqin",
    // },
    {
        "book_title":"And Then There Were None",
        "author":"Agatha Christie",
    },
    {
        "book_title":"The Lion, the Witch and the Wardrobe",
        "author":"C. S. Lewis",
    },
    {
        "book_title":" Prince Caspian",
        "author":"C. S. Lewis",
    },
    {
        "book_title":"The Voyage of the Dawn Treader",
        "author":"C. S. Lewis",
    },
    {
        "book_title":"The Last Battle",
        "author":"C. S. Lewis",
    },
    {
        "book_title":"The Silver Chair",
        "author":"C.S. Lewis",
    },
    {
        "book_title":"The Horse and His Boy",
        "author":"C.S. Lewis",
    },
    // {
    //     "book_title":"She: A History of Adventure",
    //     "author":"H. Rider Haggard",
    // },
    {
        "book_title":"The Adventures of Pinocchio",
        "author":"Carlo Collodi",
    },
    {
        "book_title":"The Da Vinci Code",
        "author":"Dan Brown",
    },
    {
        "book_title":"Harry Potter and the Chamber of Secrets",
        "author":"J. K. Rowling",
    },
    {
        "book_title":"Harry Potter and the Prisoner of Azkaban",
        "author":"J. K. Rowling",
    },
    {
        "book_title":"Harry Potter and the Goblet of Fire",
        "author":"J. K. Rowling",
    },
    {
        "book_title":"Harry Potter and the Order of the Phoenix",
        "author":"J. K. Rowling",
    },
    {
        "book_title":"Harry Potter and the Half-Blood Prince",
        "author":"J. K. Rowling",
    },
    {
        "book_title":"Harry Potter and the Deathly Hallows",
        "author":"J. K. Rowling",
    },
    {
        "book_title":"The Catcher in the Rye",
        "author":"J. D. Salinger",
    },
    {
        "book_title":"The Bridges of Madison County",
        "author":"Robert James Waller",
    },
    {
        "book_title":"Ben-Hur: A Tale of the Christ",
        "author":"Lew Wallace",
    },
    {
        "book_title":"You Can Heal Your Life",
        "author":"Louise Hay",
    },
    // {
    //     "book_title":"One Hundred Years of Solitude",
    //     "author":"Gabriel García Márquez",
    // },
    {
        "book_title":"The Common Sense Book of Baby and Child Care",
        "author":"Benjamin Spock",
    },
    // {
    //     "book_title":"Anne of Green Gables",
    //     "author":"Lucy Maud Montgomery",
    // },
    // {
    //     "book_title":"The Name of the Rose",
    //     "author":"Umberto Eco",
    // },
    {
        "book_title":"The Eagle Has Landed",
        "author":"Jack Higgins",
    },
    // {
    //     "book_title":"Watership Down",
    //     "author":"Richard Adams",
    // },
    {
        "book_title":"The Hite Report",
        "author":"Shere Hite",
    },
    {
        "book_title":"Charlotte's Web",
        "author":"E.B. White",
    },
    {
        "book_title":"The Tale of Peter Rabbit",
        "author":"Beatrix Potter",
    },
    // {
    //     "book_title":"Jonathan Livingston Seagull",
    //     "author":"Richard Bach",
    // },
    {
        "book_title":"The Very Hungry Caterpillar",
        "author":"Eric Carle",
    },
    // {
    //     "book_title":"A Message to Garcia",
    //     "author":"Elbert Hubbard",
    // },
    {
        "book_title":"To Kill a Mockingbird",
        "author":"Harper Lee",
    },
    // {
    //     "book_title":"Flowers in the Attic",
    //     "author":"V.C. Andrews",
    // },
    {
        "book_title":"Cosmos",
        "author":"Carl Sagan",
    },
    // {
    //     "book_title":"Sophie's World",
    //     "author":"Jostein Gaarder",
    // },
    {
        "book_title":"Angels & Demons",
        "author":"Dan Brown",
    },
    {
        "book_title":"Kane and Abel",
        "author":"Jeffrey Archer",
    },
    {
        "book_title":"How the Steel Was Tempered",
        "author":"Nikolai Ostrovsky",
    },
    {
        "book_title":"War and Peace ",
        "author":"Leo Tolstoy",
    },
    {
        "book_title":"The Diary of Anne Frank ",
        "author":"Anne Frank",
    },
    {
        "book_title":"Your Erroneous Zones",
        "author":"Wayne Dyer",
    },
    // {
    //     "book_title":"The Purpose Driven Life",
    //     "author":"Rick Warren",
    // },
    {
        "book_title":"Valley of the Dolls",
        "author":"Jacqueline Susann",
    },
    {
        "book_title":"The Great Gatsby",
        "author":"F. Scott Fitzgerald",
    },
    // {
    //     "book_title":"Gone with the Wind",
    //     "author":"Margaret Mitchell",
    // },
    // {
    //     "book_title":"Rebecca",
    //     "author":"Daphne du Maurier",
    // },
    {
        "book_title":"Nineteen Eighty-Four",
        "author":"George Orwell",
    },
    {
        "book_title":"The Revolt of Mamie Stover",
        "author":"William Bradford Huie",
    },
    {
        "book_title":"The Girl with the Dragon Tattoo",
        "author":"Stieg Larsson",
    },
    {
        "book_title":"The Lost Symbol",
        "author":"Dan Brown",
    },
    {
        "book_title":"The Hunger Games",
        "author":"Suzanne Collins",
    },
    // {
    //     "book_title":"The Young Guard",
    //     "author":"Alexander Alexandrovich Fadeyev",
    // },
    // {
    //     "book_title":"Who Moved My Cheese?",
    //     "author":"Spencer Johnson",
    // },
    // {
    //     "book_title":"A Brief History of Time",
    //     "author":"Stephen Hawking",
    // },
    // {
    //     "book_title":"Paul et Virginie",
    //     "author":"Jacques-Henri Bernardin de Saint-Pierre",
    // },
    // {
    //     "book_title":"Lust for Life",
    //     "author":"Irving Stone",
    // },
    // {
    //     "book_title":"The Wind in the Willows",
    //     "author":"Kenneth Grahame",
    // },
    // {
    //     "book_title":"Virgin Soil Upturned ",
    //     "author":"Mikhail Sholokhov",
    // },
    // {
    //     "book_title":"The Celestine Prophecy",
    //     "author":"James Redfield",
    // },
    // {
    //     "book_title":"Uncle Styopa",
    //     "author":"Sergey Mikhalkov",
    // },
    // {
    //     "book_title":"The Godfather",
    //     "author":"Mario Puzo",
    // },
    // {
    //     "book_title":"Love Story",
    //     "author":"Erich Segal",
    // },
    {
        "book_title":"Catching Fire",
        "author":"Suzanne Collins",
    },
    {
        "book_title":"Mockingjay",
        "author":"Suzanne Collins",
    },
    // {
    //     "book_title":"Kitchen",
    //     "author":"Banana Yoshimoto",
    // },
    // {
    //     "book_title":"Andromeda Nebula",
    //     "author":"Ivan Yefremov",
    // },
    // {
    //     "book_title":"Autobiography of a Yogi",
    //     "author":"Paramahansa Yogananda",
    // },
    // {
    //     "book_title":"The Girl on the Train",
    //     "author":"Paula Hawkins",
    // },
    {
        "book_title":"All Quiet on the Western Front ",
        "author":"Erich Maria Remarque",
    },
    {
        "book_title":"The Bermuda Triangle",
        "author":"Charles Berlitz",
    },
    // {
    //     "book_title":"Things Fall Apart",
    //     "author":"Chinua Achebe",
    // },
    {
        "book_title":"Animal Farm",
        "author":"George Orwell",
    },
    // {
    //     "book_title":"Wolf Totem ",
    //     "author":"Jiang Rong",
    // },
    {
        "book_title":"The Happy Hooker: My Own Story",
        "author":"Xaviera Hollander",
    },
    // {
    //     "book_title":"Jaws",
    //     "author":"Peter Benchley",
    // },
    // {
    //     "book_title":"Love You Forever",
    //     "author":"Robert Munsch",
    // },
    // {
    //     "book_title":"The Women's Room",
    //     "author":"Marilyn French",
    // },
    {
        "book_title":"What to Expect When You're Expecting",
        "author":"Arlene Eisenberg Heidi Murkoff",
    },
    // {
    //     "book_title":"The Secret Diary of Adrian Mole, Aged 13 3/4",
    //     "author":"Sue Townsend",
    // },
    // {
    //     "book_title":"Kon-Tiki: Across the Pacific in a Raft ",
    //     "author":"Thor Heyerdahl",
    // },
    // {
    //     "book_title":"The Good Soldier Švejk ",
    //     "author":"Jaroslav Hašek",
    // },
    {
        "book_title":"Where the Wild Things Are",
        "author":"Maurice Sendak",
    },
    {
        "book_title":"The Power of Positive Thinking",
        "author":"Norman Vincent Peale",
    },
    // {
    //     "book_title":"The Secret",
    //     "author":"Rhonda Byrne",
    // },
    // {
    //     "book_title":"Fear of Flying",
    //     "author":"Erica Jong",
    // },
    // {
    //     "book_title":"The Naked Ape",
    //     "author":"Desmond Morris",
    // },
    // {
    //     "book_title":"Totto-chan, the Little Girl at the Window ",
    //     "author":"Tetsuko Kuroyanagi",
    // },
    {
        "book_title":"The Horse Whisperer",
        "author":"Nicholas Evans",
    },
    // {
    //     "book_title":"Goodnight Moon",
    //     "author":"Margaret Wise Brown",
    // },
    // {
    //     "book_title":"The Neverending Story",
    //     "author":"Michael Ende",
    // },
    {
        "book_title":"The Outsiders",
        "author":"S.E. Hinton",
    },
    // {
    //     "book_title":"Guess How Much I Love You",
    //     "author":"Sam McBratney",
    // },
    // {
    //     "book_title":"Shōgun",
    //     "author":"James Clavell",
    // },
    // {
    //     "book_title":"The Poky Little Puppy",
    //     "author":"Janette Sebring Lowrey",
    // },
    // {
    //     "book_title":"The Pillars of the Earth",
    //     "author":"Ken Follett",
    // },
    // {
    //     "book_title":"How to Win Friends and Influence People",
    //     "author":"Dale Carnegie",
    // },
    // {
    //     "book_title":"Perfume",
    //     "author":"Patrick Süskind",
    // },
    // {
    //     "book_title":"The Shadow of the Wind",
    //     "author":"Carlos Ruiz Zafón",
    // },
    // {
    //     "book_title":"Interpreter of Maladies",
    //     "author":"Jhumpa Lahiri",
    // },
    // {
    //     "book_title":"Becoming",
    //     "author":"Michelle Obama",
    // },
    {
        "book_title":"Tuesdays with Morrie",
        "author":"Mitch Albom",
    },
    // {
    //     "book_title":"God's Little Acre",
    //     "author":"Erskine Caldwell",
    // },
    // {
    //     "book_title":"Follow Your Heart",
    //     "author":"Susanna Tamaro",
    // },
    {
        "book_title":"A Wrinkle in Time",
        "author":"Madeleine L'Engle",
    },
    {
        "book_title":"Long Walk to Freedom",
        "author":"Nelson Mandela",
    },
    {
        "book_title":"The Old Man and the Sea",
        "author":"Ernest Hemingway",
    },
    // {
    //     "book_title":"Life After Life",
    //     "author":"Raymond Moody",
    // },
    // {
    //     "book_title":"Me Before You",
    //     "author":"Jojo Moyes",
    // },
    // {
    //     "book_title":"Norwegian Wood",
    //     "author":"Haruki Murakami",
    // },
    // {
    //     "book_title":"Peyton Place",
    //     "author":"Grace Metalious",
    // },
    // {
    //     "book_title":"The Plague",
    //     "author":"Albert Camus",
    // },
    // {
    //     "book_title":"No Longer Human",
    //     "author":"Osamu Dazai",
    // },
    // {
    //     "book_title":"Man's Search for Meaning",
    //     "author":"Viktor Frankl",
    // },
    {
        "book_title":"The Divine Comedy",
        "author":"Dante Alighieri",
    },
    // {
    //     "book_title":"The Prophet",
    //     "author":"Kahlil Gibran",
    // },
    {
        "book_title":"The Gruffalo",
        "author":"Julia Donaldson",
    },
    // {
    //     "book_title":"Ronia, the Robber's Daughter",
    //     "author":"Astrid Lindgren",
    // },
    {
        "book_title":"The Cat in the Hat",
        "author":"Dr. Seuss",
    },
    // {
    //     "book_title":"Diana: Her True Story",
    //     "author":"Andrew Morton",
    // },
    // {
    //     "book_title":"The Stranger ",
    //     "author":"Albert Camus",
    // },
    // {
    //     "book_title":"Eye of the Needle",
    //     "author":"Ken Follett",
    // },
    // {
    //     "book_title":"Wild Swans",
    //     "author":"Jung Chang",
    // },
    // {
    //     "book_title":"Santa Evita",
    //     "author":"Tomás Eloy Martínez",
    // },
    {
        "book_title":"Night ",
        "author":"Elie Wiesel",
    },
    // {
    //     "book_title":"Confucius from the Heart",
    //     "author":"Yu Dan",
    // },
    // {
    //     "book_title":"The Total Woman",
    //     "author":"Marabel Morgan",
    // },
    // {
    //     "book_title":"Knowledge-value Revolution ",
    //     "author":"Taichi Sakaiya",
    // },
    // {
    //     "book_title":"Problems in China's Socialist Economy",
    //     "author":"Xue Muqiao",
    // },
    // {
    //     "book_title":"What Color Is Your Parachute?",
    //     "author":"Richard Nelson Bolles",
    // },
    // {
    //     "book_title":"The Dukan Diet",
    //     "author":"Pierre Dukan",
    // },
    {
        "book_title":"The Joy of Sex",
        "author":"Alex Comfort",
    },
    // {
    //     "book_title":"The Gospel According to Peanuts",
    //     "author":"Robert L. Short",
    // },
    {
        "book_title":"The Giver",
        "author":"Lois Lowry",
    },
    // {
    //     "book_title":"The Goal",
    //     "author":"Eliyahu M. Goldratt",
    // },
    {
        "book_title":"Fahrenheit 451",
        "author":"Ray Bradbury",
    },
    // {
    //     "book_title":"Angela's Ashes",
    //     "author":"Frank McCourt",
    // },
    {
        "book_title":"The Story of My Experiments with Truth",
        "author":"Mohandas Karamchand Gandhi",
    },
    // {
    //     "book_title":"Think and Grow Rich",
    //     "author":"Napoleon Hill",
    // },
    {
        "book_title":"The Fault in Our Stars",
        "author":"John Green",
    },
    {
        "book_title":"Divergent",
        "author":"Veronica Roth",
    },
    {
        "book_title":"Pride and Prejudice",
        "author":"Jane Austen",
    },
    {
        "book_title":"1984",
        "author":"George Orwell",
    },
    {
        "book_title":"The Kite Runner",
        "author":"Khaled Hosseini",
    },
    {
        "book_title":"The Fellowship of the Ring",
        "author":"J.R.R. Tolkien",
    },
    {
        "book_title":"The Lovely Bones",
        "author":"Alice Sebold",
    },
    {
        "book_title":"Gone Girl",
        "author":"Gillian Flynn",
    },
    {
        "book_title":"The Help",
        "author":"Kathyrn Stockett",
    },
    {
        "book_title":"Of Mice and Men",
        "author":"John Steinbeck",
    },
    {
        "book_title":"The Alchemist",
        "author":"Paulo Coehlo",
    },
    {
        "book_title":"Fifty Shades of Grey",
        "author":"E.L. James",
    },
    {
        "book_title":"The Girl on the Train",
        "author":"Paula Hawkins",
    },
    {
        "book_title":"The Book Thief",
        "author":"Markus Zuzak",
    },
    {
        "book_title":"Little Women",
        "author":"Louise May Alcott",
    },
    {
        "book_title":"Eat, Pray, Love",
        "author":"Elizabeth Gilbert",
    },
    {
        "book_title":"Water for Elephants",
        "author":"Sara Gruen",
    },
    {
        "book_title":"The Notebook",
        "author":"Nicholas Sparks",
    },
    {
        "book_title":"Life of Pi",
        "author":"Yann Martel",
    },
    {
        "book_title":"The Hitchhiker’s Guide to the Galaxy",
        "author":"Douglas Adams",
    },
    {
        "book_title":"Wuthering Heights",
        "author":"Emily Bronte",
    },
    {
        "book_title":"Where the Sidewalk Ends",
        "author":"Shel Silverstein",
    },
    {
        "book_title":"The Perks of Being a Wallflower",
        "author":"Stephen Chbosky",
    },
    {
        "book_title":"Insurgent",
        "author":"Veronica Roth",
    },
    {
        "book_title":"The Curious Incident of the Dog in the Night-Time",
        "author":"Mark Haddon",
    },
    {
        "book_title":"Gone with the Wind",
        "author":"Margaret Mitchell",
    },
    {
        "book_title":"Frankenstein",
        "author":"Mary Shelley",
    },
    {
        "book_title":"My Sister’s Keeper",
        "author":"Jodi Picoult",
    },
    {
        "book_title":"A Thousand Splendid Suns",
        "author":"Khaled Hosseini",
    },
    {
        "book_title":"The Shining",
        "author":"Stephen King",
    },
    {
        "book_title":"The Maze Runner",
        "author":"James Dashner",
    },
    {
        "book_title":"Holes",
        "author":"Louis Sachar",
    },
    {
        "book_title":"Sense and Sensibility",
        "author":"Jane Austen",
    },
    {
        "book_title":"The Host",
        "author":"Stephenie Meyer",
    },
    {
        "book_title":"Me Before You",
        "author":"Jojo Moyes",
    },
    {
        "book_title":"Bridget Jones’s Diary",
        "author":"Helen Fielding",
    },
    {
        "book_title":"Miss Peregrine’s Home for Peculiar Children",
        "author":"Ransom Riggs",
    },
    {
        "book_title":"The Picture of Dorian Gray",
        "author":"Oscar Wilde",
    },
    {
        "book_title":"The Secret Garden",
        "author":"Frances Hodgson Burnett",
    },
    {
        "book_title":"Into the Wild",
        "author":"Jon Krakauer",
    },
    {
        "book_title":"The Glass Castle",
        "author":"Jeannette Walls",
    },
    {
        "book_title":"The Devil Wears Prada",
        "author":"Lauren Weisberger",
    },
    {
        "book_title":"A Tale of Two Cities",
        "author":"Charles Dickens",
    },
    {
        "book_title":"Paper Towns",
        "author":"John Green",
    },
    {
        "book_title":"Allegiant",
        "author":"Veronica Roth",
    },
    {
        "book_title":"Steve Jobs",
        "author":"Walter Isaacson",
    },
    {
        "book_title":"Bossypants",
        "author":"Tina Fey",
    },
    {
        "book_title":"City of Glass",
        "author":"Cassandra Clare",
    },
    {
        "book_title":"All the Light We Cannot See",
        "author":"Anthony Doerr",
    },
    {
        "book_title":"The Princess Bride",
        "author":"William Goldman",
    },
    {
        "book_title":"Eleanor & Park",
        "author":"Rainbow Rowell",
    },
    {
        "book_title":"A Clash of Kings",
        "author":"George R.R. Martin",
    },
    {
        "book_title":"Fifty Shades Darker",
        "author":"E.L. James",
    },
    {
        "book_title":"Outlander",
        "author":"Diana Gabaldon",
    },
    {
        "book_title":"The Count of Monte Cristo",
        "author":"Alexandre Dumas",
    },
    {
        "book_title":"The Adventures of Tom Sawyer",
        "author":"Mark Twain",
    },
    {
        "book_title":"Tuesday with Morrie",
        "author":"Mitch Albom",
    },
    {
        "book_title":"The Selection",
        "author":"Kiera Cass",
    },
    {
        "book_title":"A Time to Kill",
        "author":"John Grisham",
    },
    {
        "book_title":"Thirteen Reasons Why",
        "author":"Jay Asher",
    },
    {
        "book_title":"Fifty Shades Freed",
        "author":"E.L. James",
    },
    {
        "book_title":"One Hundred Years of Solitude",
        "author":"Gabriel Marquez",
    },
    {
        "book_title":"Room",
        "author":"Emma Donoghue",
    },
    {
        "book_title":"Catch-22",
        "author":"Joseph Heller",
    },
    {
        "book_title":"If I Stay",
        "author":"Gayle Forman",
    },
    {
        "book_title":"The Grapes of Wrath",
        "author":"John Steinbeck",
    },
    {
        "book_title":"The Road",
        "author":"Cormac McCarthy",
    },
    {
        "book_title":"Les Miserables",
        "author":"Victor Hugo",
    },
    {
        "book_title":"Unbroken: A World War II Story",
        "author":"Laura Hillenbrand",
    },
    {
        "book_title":"The Sea of Monsters",
        "author":"Rick Riordan",
    },
    {
        "book_title":"American Gods",
        "author":"Neil Gaiman",
    },
    {
        "book_title":"The Martian",
        "author":"Andy Weird",
    },
    {
        "book_title":"It",
        "author":"Stephen King",
    },
    {
        "book_title":"Freakonomics",
        "author":"Steven Levitt",
    },
    {
        "book_title":"The Battle of the Labyrinth",
        "author":"Rick Riordan",
    },
    {
        "book_title":"Anne of Green Gables",
        "author":"L.M. Montgomery",
    },
    {
        "book_title":"Confessions of a Shopaholic",
        "author":"Sophie Kinsella",
    },
    {
        "book_title":"A Walk to Remember",
        "author":"Nicholas Sparks",
    },
    {
        "book_title":"Matched",
        "author":"Ally Condie",
    },
    {
        "book_title":"The Two Towers",
        "author":"J.R.R. Tolkien",
    },
    {
        "book_title":"Dune",
        "author":"Frank Herbert",
    },
    {
        "book_title":"A Storm of Swords",
        "author":"George R.R. Martin",
    },
    {
        "book_title":"The Sisterhood of the Traveling Pants",
        "author":"Ann Brashares",
    },
    {
        "book_title":"Before I Fall",
        "author":"Lauren Oliver",
    },
    {
        "book_title":"The Tipping Point",
        "author":"Malcolm Gladwell",
    },
    {
        "book_title":"Lolita",
        "author":"Vladmir Nabokov",
    },
    {
        "book_title":"The Return of the King",
        "author":"J.R.R. Tolkien",
    },
    {
        "book_title":"The Titan’s Curse",
        "author":"Rick Riordan",
    },
    {
        "book_title":"Me Talk Pretty One Day",
        "author":"David Sedaris",
    },
    {
        "book_title":"Charlie and the Chocolate Factory",
        "author":"Roald Dahl",
    },
    {
        "book_title":"The Last Olympian",
        "author":"Rick Riordan",
    },
    {
        "book_title":"The Pillars of Earth",
        "author":"Ken Follett",
    },
    {
        "book_title":"Girl with a Pearl Earring",
        "author":"Tracy Chevalier",
    },
    {
        "book_title":"One Flew Over the Cuckoo’s Nest",
        "author":"Ken Kasey",
    },
    {
        "book_title":"Wicked",
        "author":"Gregory Maguire",
    },
    {
        "book_title":"Emma",
        "author":"Jane Austen",
    },
    {
        "book_title":"Middlesex",
        "author":"Jeffrey Eugenides",
    },
    {
        "book_title":"Cinder",
        "author":"Marissa Meyer",
    },
    {
        "book_title":"The Goldfinch",
        "author":"Donna Tartt",
    },
    {
        "book_title":"The Name of the Wind",
        "author":"Patrick Rothfuss",
    },
    {
        "book_title":"The Lost Hero",
        "author":"Rick Riordan",
    },
    {
        "book_title":"The Night Circus",
        "author":"Erin Morgenstern",
    },
    {
        "book_title":"The Memory Keeper’s Daughter",
        "author":"Kim Edwards",
    },
    {
        "book_title":"Ready Player One",
        "author":"Ernest Cline",
    },
    {
        "book_title":"A Feast of Crows",
        "author":"George R.R. Martin",
    },
    {
        "book_title":"Anna Karenina",
        "author":"Leo Tolstoy",
    },
    {
        "book_title":"Deception Point",
        "author":"Dan Brown",
    },
    {
        "book_title":"The Firm",
        "author":"John Grisham",
    },
    {
        "book_title":"The Stand",
        "author":"Stephen King",
    },
    {
        "book_title":"Wonder",
        "author":"R.J. Palacio",
    },
    {
        "book_title":"Big Little Lies",
        "author":"Liane Moriarty",
    },
    {
        "book_title":"A Clockwork Orange",
        "author":"Anthony Burgess",
    },
    {
        "book_title":"Hush, Hush",
        "author":"Becca Fitzpatrick",
    },
    {
        "book_title":"Uglies",
        "author":"Scott Westerfield",
    },
    {
        "book_title":"Educated",
        "author":"Tara Westover",
    },
    {
        "book_title":"Crime and Punishment",
        "author":"Fyodor Dostoyevsky",
    },
    {
        "book_title":"Matilda",
        "author":"Roald Dahl",
    },
    {
        "book_title":"Beautiful Creatures",
        "author":"Kami Garcia",
    },
    {
        "book_title":"Divine Secrets of the Ya-Ya Sisterhood",
        "author":"Rebecca Wells",
    },
    {
        "book_title":"Digital Fortress",
        "author":"Dan Brown",
    },
    {
        "book_title":"Dear John",
        "author":"Nicholas Sparks",
    },
    {
        "book_title":"Vampire Academy",
        "author":"Richelle Mead",
    },
    {
        "book_title":"The Bell Jar",
        "author":"Sylvia Plath",
    },
    {
        "book_title":"Wild: From Lost to Found",
        "author":"Cheryl Strayed",
    },
    {
        "book_title":"The Shack",
        "author":"W. Paul Young",
    },
    {
        "book_title":"Beautiful Disaster",
        "author":"Jamie McGuire",
    },
    {
        "book_title":"The Red Tent",
        "author":"Anita Diamant",
    },
    {
        "book_title":"The Last Song",
        "author":"Nicholas Sparks",
    },
    {
        "book_title":"Dead Until Dark",
        "author":"Charlaine Harris",
    },
    {
        "book_title":"A Dance with Dragons",
        "author":"George R.R. Martin",
    },
    {
        "book_title":"The Immortal Life of Henrietta Lacks",
        "author":"Rebecca Skloot",
    },
    {
        "book_title":"Siddhartha",
        "author":"Hermann Hesse",
    },
    {
        "book_title":"The Guernsey Literary and Potato Peel Pie Society",
        "author":"Mary Ann Shaffer",
    },
    {
        "book_title":"Something Borrowed",
        "author":"Emily Giffin",
    },
    {
        "book_title":"Angela’s Ashes",
        "author":"Frank McCourt",
    },
    {
        "book_title":"Persuasion",
        "author":"Jane Austen",
    },
    {
        "book_title":"Dark Places",
        "author":"Gillian Flynn",
    },
    {
        "book_title":"Watchmen",
        "author":"Alan Moore",
    },
    {
        "book_title":"Fangirl",
        "author":"Rainbow Rowell",
    },
    {
        "book_title":"The Color Purple",
        "author":"Alice Walker",
    },
    {
        "book_title":"One for the Money",
        "author":"Janet Evanovich",
    },
    {
        "book_title":"Fallen",
        "author":"Lauren Kate",
    },
    {
        "book_title":"The Gunslinger",
        "author":"Stephen King",
    },
    {
        "book_title":"Interview with a Vampire",
        "author":"Anne Rice",
    },
    {
        "book_title":"The Nightingale",
        "author":"Kristin Hannah",
    },
    {
        "book_title":"Fight Club",
        "author":"Chuck Palahniuk",
    },
    {
        "book_title":"The Other Boleyn Girl",
        "author":"Philippa Gregory",
    },
    {
        "book_title":"Sharp Objects",
        "author":"Gillian Flynn",
    },
    {
        "book_title":"The Husband’s Secret",
        "author":"Liane Moriarty",
    },
    {
        "book_title":"Bared to You",
        "author":"Sylvia Day",
    },
    {
        "book_title":"Marley and Me",
        "author":"John Grogan",
    },
    {
        "book_title":"Throne of Glass",
        "author":"Sarah J Maas",
    },
    {
        "book_title":"City of Fallen Angels",
        "author":"Cassandra Clare",
    },
    {
        "book_title":"Outliers",
        "author":"Malcolm Gladwell",
    },
    {
        "book_title":"Blink",
        "author":"Malcolm Gladwell",
    },
    {
        "book_title":"The Devil in the White City",
        "author":"Erik Larson",
    },
    {
        "book_title":"Misery",
        "author":"Stephen King",
    },
    {
        "book_title":"Marked",
        "author":"P.C. Cast and Kristin Cast",
    },
    {
        "book_title":"Shiver",
        "author":"Maggie Stiefvater",
    },
    {
        "book_title":"The Silence of the Lambs",
        "author":"Thomas Harris",
    },
    {
        "book_title":"The Art of Racing in the Rain",
        "author":"Garth Stein",
    },
    {
        "book_title":"Atonement",
        "author":"Ian McEwan",
    },
    {
        "book_title":"The Cuckoo’s Calling",
        "author":"Robert Galbraith",
    },
    {
        "book_title":"Inferno",
        "author":"Dan Brown",
    },
    {
        "book_title":"An Abundance of Katherines",
        "author":"John Green",
    },
    {
        "book_title":"The Ocean at the End of the Lane",
        "author":"Neil Gaiman",
    },
    {
        "book_title":"Bridge to Terabithia",
        "author":"Katherin Paterson",
    },
    {
        "book_title":"Flowers for Algernon",
        "author":"Daniel Keyes",
    },
    {
        "book_title":"Delirium",
        "author":"Lauren Oliver",
    },
    {
        "book_title":"Red Queen",
        "author":"Victoria Aveyard",
    },
    {
        "book_title":"How to Win Friends and Influence People",
        "author":"Dale Carnegie",
    },
    {
        "book_title":"The Scorch Trials",
        "author":"James Dashner",
    },
    {
        "book_title":"The Boy in the Striped Pajamas",
        "author":"John Boyne",
    },
    {
        "book_title":"The 7 Habits of Highly Effective People",
        "author":"Stephen Covey",
    },
    {
        "book_title":"Good Omens",
        "author":"Terry Pratchett and Neil Gaiman",
    },
    {
        "book_title":"Sarah’s Key",
        "author":"Tatiana Rosnay",
    },
    {
        "book_title":"Never Let Me Go",
        "author":"Kazuo Ishiguro",
    },
    {
        "book_title":"World War Z",
        "author":"Max Brooks",
    },
    {
        "book_title":"East of Eden",
        "author":"John Steinbeck",
    },
    {
        "book_title":"The Mark of Athena",
        "author":"Rick Riordan",
    },
    {
        "book_title":"The Graveyard Book",
        "author":"Neil Gaiman",
    },
    {
        "book_title":"Rebecca",
        "author":"Daphne du Maurier",
    },
    {
        "book_title":"City of Lost Souls",
        "author":"Cassandra Clare",
    },
    {
        "book_title":"The Bourne Identity",
        "author":"Robert Ludlum",
    },
    {
        "book_title":"The Shadow of the Wind",
        "author":"Carlos Zafon",
    },
    {
        "book_title":"Legend",
        "author":"Marie Lu",
    },
    {
        "book_title":"We Were Liars",
        "author":"E. Lockhard",
    },
    {
        "book_title":"A Man Called Ove",
        "author":"Fredrik Backman",
    },
    {
        "book_title":"Is Everything Hanging Out Without Me?",
        "author":"Mindy Kaling",
    },
    {
        "book_title":"Along Came a Spider",
        "author":"James Patterson",
    },
    {
        "book_title":"The Rosie Project",
        "author":"Graeme Simsion",
    },
    {
        "book_title":"The Client",
        "author":"John Grisham",
    },
    {
        "book_title":"The Son of Neptune",
        "author":"Rick Riordan",
    },
    {
        "book_title":"The Tales of Beedle the Bard",
        "author":"J.K. Rowling",
    },
    {
        "book_title":"Love in the Time of Cholera",
        "author":"Gabriel Marquez",
    },
    {
        "book_title":"Extremely Loud and Incredibly Close",
        "author":"Jonathan Foer",
    },
    {
        "book_title":"Neverwhere",
        "author":"Neil Gaiman",
    },
    {
        "book_title":"The Nanny Diaries",
        "author":"Emma McLaughlin",
    },
    {
        "book_title":"Treasure Island",
        "author":"Robert Stevenson",
    },
    {
        "book_title":"11/22/63",
        "author":"Stephen King",
    },
    {
        "book_title":"A Child Called “It”",
        "author":"David Pelzer",
    },
    {
        "book_title":"A Tree Grows in Brooklyn",
        "author":"Betty Smith",
    },
    {
        "book_title":"The Light Between Oceans",
        "author":"M.L. Stedman",
    },
    {
        "book_title":"Foundation",
        "author":"Isaac Asimov",
    },
    {
        "book_title":"Watership Down",
        "author":"Richard Adams",
    },
    {
        "book_title":"The Magician’s Nephew",
        "author":"C.S. Lewis",
    },
    {
        "book_title":"Yes Please",
        "author":"Amy Poehler",
    },
    {
        "book_title":"The 5th Wave",
        "author":"Rick Yancey",
    },
    {
        "book_title":"Graceling",
        "author":"Kristin Cashore",
    },
    {
        "book_title":"The Sun Also Rises",
        "author":"Ernest Hemingway",
    },
    {
        "book_title":"Can You Keep a Secret?",
        "author":"Sophie Kinsella",
    },
    {
        "book_title":"The Wise Man’s Fear",
        "author":"Patrick Rothfuss",
    },
    {
        "book_title":"Running with Scissors",
        "author":"Augusten Burroughs",
    },
    {
        "book_title":"I Know Why the Caged Bird Sings",
        "author":"Maya Angelou",
    },
    {
        "book_title":"Into the Air",
        "author":"Jon Krakauer",
    },
    {
        "book_title":"Atlas Shrugged",
        "author":"Ayn Rand",
    },
    {
        "book_title":"The Pelican Brief",
        "author":"John Grisham",
    },
    {
        "book_title":"Inheart",
        "author":"Cornelia Funk",
    },
    {
        "book_title":"James and the Giant Peach",
        "author":"Roald Dahl",
    },
    {
        "book_title":"Anna and the French Kiss",
        "author":"Stephanie Perkins",
    },
    {
        "book_title":"Pet Sematary",
        "author":"Stephen King",
    },
    {
        "book_title":"Snow Flower and the Secret Fan",
        "author":"Lisa See",
    },
    {
        "book_title":"The Elite",
        "author":"Kiera Cass",
    },
    {
        "book_title":"Where’d You Go, Bernadette",
        "author":"Maria Semple",
    },
    {
        "book_title":"Cutting for Stone",
        "author":"Abraham Verghese",
    },
    {
        "book_title":"Orphan Train",
        "author":"Chrstina Kline",
    },
    {
        "book_title":"The Eye of the World",
        "author":"Robert Jordan",
    },
    {
        "book_title":"The Wonderful Wizard of Oz",
        "author":"Frank L. Baum",
    },
    {
        "book_title":"Three Cups of Tea",
        "author":"Greg Mortenson",
    },
    {
        "book_title":"P.S. I Love You",
        "author":"Cecelia Ahern",
    },
    {
        "book_title":"Diary of a Wimpy Kid",
        "author":"Jeff Kinney",
    },
    {
        "book_title":"Where the Red Ferns Grow",
        "author":"Wilson Rawls",
    },
    {
        "book_title":"The Lucky One",
        "author":"Nicholas Sparks",
    },
    {
        "book_title":"Shadow Kiss",
        "author":"Richelle Mead",
    },
    {
        "book_title":"Like Water for Chocolate",
        "author":"Laura Esquivel",
    },
    {
        "book_title":"Safe Haven",
        "author":"Nicholas Sparks",
    },
    {
        "book_title":"The Strange Case of Dr. Jekyll and Mr. Hyde",
        "author":"Robert Stevenson",
    },
    {
        "book_title":"The BFG",
        "author":"Roald Dahl",
    },
    {
        "book_title":"Cat’s Cradle",
        "author":"Kurt Vonnegut",
    },
    {
        "book_title":"The Hunt for Red October",
        "author":"Tom Clancy",
    },
    {
        "book_title":"The Subtle Knife",
        "author":"Philip Pullman",
    },
    {
        "book_title":"Under the Tuscan Sun",
        "author":"Frances Mayes",
    },
    {
        "book_title":"Kiss the Girls",
        "author":"James Patterson",
    },
    {
        "book_title":"Stardust",
        "author":"Neil Gaiman",
    },
    {
        "book_title":"I am Malala",
        "author":"Malala Yousafzai",
    },
    {
        "book_title":"Who Moved My Cheese?",
        "author":"Spencer Johnson",
    },
    {
        "book_title":"I am Number Four",
        "author":"Pittacus Lore",
    },
    {
        "book_title":"Will Grayson, Will Grayson",
        "author":"John Green",
    },
    {
        "book_title":"The Godfather",
        "author":"Mario Puzo",
    },
    {
        "book_title":"Reflected in You",
        "author":"Sylvia Day",
    },
    {
        "book_title":"The Death Cure",
        "author":"James Dashner",
    },
    {
        "book_title":"The Thorn Birds",
        "author":"Colleen McCullough",
    },
    {
        "book_title":"She’s Come Undone",
        "author":"Wally Lamb",
    },
    {
        "book_title":"Frostbite",
        "author":"Richelle Mead",
    },
    {
        "book_title":"A Walk in the Woods",
        "author":"Bill Bryson",
    },
    {
        "book_title":"The Secret",
        "author":"Rhonda Byrne",
    },
    {
        "book_title":"The Final Empire",
        "author":"Brandon Sanderson",
    },
    {
        "book_title":"Oliver Twist",
        "author":"Charles Dickens",
    },
    {
        "book_title":"The One",
        "author":"Kiera Cass",
    },
    {
        "book_title":"The Crucible",
        "author":"Arther Miller",
    },
    {
        "book_title":"The Unbearable Lightness of Being",
        "author":"Milan Kundera",
    },
    {
        "book_title":"Do Androids Dream of Electric Sheep?",
        "author":"Philip K. Dick",
    },
    {
        "book_title":"A Discovery of Witches",
        "author":"Deborah Harkness",
    },
    {
        "book_title":"Othello",
        "author":"William Shakespeare",
    },
    {
        "book_title":"The Casual Vacancy",
        "author":"J.K. Rowling",
    },
    {
        "book_title":"The Fountainhead",
        "author":"Ayn Rand",
    },
    {
        "book_title":"I Know This Much is True",
        "author":"Wally Lamb",
    },
    {
        "book_title":"Nineteen Minutes",
        "author":"Jodi Picoult",
    },
    {
        "book_title":"Salem’s Lot",
        "author":"Stephen King",
    },
    {
        "book_title":"The Screwtape Letters",
        "author":"C.S. Lewis",
    },
    {
        "book_title":"A Court of Thorns and Roses",
        "author":"Sarah J Maas",
    },
    {
        "book_title":"The Red Pyramid",
        "author":"Rick Riordan",
    },
    {
        "book_title":"The Last Lecture",
        "author":"Randy Pausch",
    },
    {
        "book_title":"White Oleander",
        "author":"Janet Fitch",
    },
    {
        "book_title":"Beloved",
        "author":"Toni Morrison",
    },
    {
        "book_title":"Good in Bed",
        "author":"Jennifer Weiner",
    },
    {
        "book_title":"Sill Alice",
        "author":"Lisa Genova",
    },
    {
        "book_title":"Stargirl",
        "author":"Jerry Spinelli",
    },
    {
        "book_title":"Fear and Loathing in Las Vegas",
        "author":"Hunter Thompson",
    },
    {
        "book_title":"1st to Die",
        "author":"James Patterson",
    },
    {
        "book_title":"A Prayer to Owen Meany",
        "author":"John Irving",
    },
    {
        "book_title":"The Importance of Being Earnest",
        "author":"Oscar Wilde",
    },
    {
        "book_title":"One Day",
        "author":"David Nicholls",
    },
    {
        "book_title":"The Witches",
        "author":"Roald Dahl",
    },
    {
        "book_title":"Daughter of Smoke & Bone",
        "author":"Laini Taylor",
    },
    {
        "book_title":"Murder on the Orient Express",
        "author":"Agatha Christie",
    },
    {
        "book_title":"Blood Promise",
        "author":"Richelle Mead",
    },
    {
        "book_title":"Hatchet",
        "author":"Gary Paulsen",
    },
    {
        "book_title":"Northanger Abbey",
        "author":"Jane Austen",
    },
    {
        "book_title":"Dark Lover",
        "author":"J.R. Ward",
    },
    {
        "book_title":"The Color of Magic",
        "author":"Terry Pratchett",
    },
    {
        "book_title":"What Alice Forgot",
        "author":"Liane Moriarty",
    },
    {
        "book_title":"Perfume: The Story of a Murderer",
        "author":"Patrick Suskind",
    },
    {
        "book_title":"And the Mountains Echoed",
        "author":"Khaled Hosseini",
    },
    {
        "book_title":"John Adams",
        "author":"David McCullough",
    },
    {
        "book_title":"Norwegian Wood",
        "author":"Haruki Murakami",
    },
    {
        "book_title":"A Study in Scarlet",
        "author":"Arthur Conan Doyle",
    },
    {
        "book_title":"Heaven is for Real",
        "author":"Todd Burpo",
    },
    {
        "book_title":"The New Drawing on the Right Side of the Brain",
        "author":"Betty Edwards",
    },
    {
        "book_title":"The Name of the Rose",
        "author":"Umberto Eco",
    },
    {
        "book_title":"When Breath Becomes Air",
        "author":"Paul Kalanithi",
    },
    {
        "book_title":"Mansfield Park",
        "author":"Jane Austen",
    },
    {
        "book_title":"Crescendo",
        "author":"Becca Fitzpatrick",
    },
    {
        "book_title":"Brisingr",
        "author":"Christopher Paolini",
    },
    {
        "book_title":"The Pact",
        "author":"Jodi Picould",
    },
    {
        "book_title":"Evermore",
        "author":"Alyson Noel",
    },
    {
        "book_title":"Stranger in a Strange Land",
        "author":"Robert Heinlein",
    },
    {
        "book_title":"Spirit Bound",
        "author":"Richelle Mead",
    },
    {
        "book_title":"Scarlet",
        "author":"Marissa Meyer",
    },
    {
        "book_title":"Man’s Search for Meaning",
        "author":"Viktor Frankl",
    },
    {
        "book_title":"The Art of War",
        "author":"Sun Tzu",
    },
    {
        "book_title":"The Thirteenth Tale",
        "author":"Diane Setterland",
    },
    {
        "book_title":"Storm Front",
        "author":"Jim Butcher",
    },
    {
        "book_title":"The Three Musketeers",
        "author":"Alexandre Dumas",
    },
    {
        "book_title":"The Amber Spyglass",
        "author":"Philip Pullman",
    },
    {
        "book_title":"The Runaway Jury",
        "author":"John Grisham",
    },
    {
        "book_title":"Before I Go to Sleep",
        "author":"S.J. Watson",
    },
    {
        "book_title":"Fried Green Tomatoes at the Whistle Shop Café",
        "author":"Fannie Flagg",
    },
    {
        "book_title":"Last Sacrifice",
        "author":"Richelle Mead",
    },
    {
        "book_title":"Everything, Everything",
        "author":"Nicola Yoon",
    },
    {
        "book_title":"Things Fall Apart",
        "author":"Chinua Achebe",
    },
    {
        "book_title":"Dragonfly in Amber",
        "author":"Diana Gabaldon",
    },
    {
        "book_title":"A Streetcar Names Desire",
        "author":"Tennessee Williams",
    },
    {
        "book_title":"Where She Went",
        "author":"Gayle Forman",
    },
    {
        "book_title":"In the Woods",
        "author":"Tara French",
    },
    {
        "book_title":"Mere Christianity",
        "author":"C.S. Lewis",
    },
    {
        "book_title":"The Story of Art",
        "author":"E.H. Gombrich",
    },
    {
        "book_title":"City of Heavenly Fire",
        "author":"Cassandra Clare",
    },
    {
        "book_title":"V for Vendetta",
        "author":"Alan Moore",
    },
    {
        "book_title":"A Short History of Nearly Everything",
        "author":"Bill Bryson",
    },
    {
        "book_title":"The Undomestic Goddess",
        "author":"Sophie Kinsella",
    },
    {
        "book_title":"Crown of Midnight",
        "author":"Sarah J Maas",
    },
    {
        "book_title":"Shatter Me",
        "author":"Taherah Mafi",
    },
    {
        "book_title":"Hopeless",
        "author":"Colleen Hoover",
    },
    {
        "book_title":"The Paris Wife",
        "author":"Paula McLain",
    },
    {
        "book_title":"I, Robot",
        "author":"Isaac Asimov",
    },
    {
        "book_title":"Station Eleven",
        "author":"Emily St. John Mandel",
    },
    {
        "book_title":"Rich Dad, Poor Dad",
        "author":"Robert Kiyosaki",
    },
    {
        "book_title":"Kafka on the Shore",
        "author":"Haruki Murakami",
    },
    {
        "book_title":"Odd Thomas",
        "author":"Dean Koontz",
    },
    {
        "book_title":"Dead to the World",
        "author":"Charlaine Harris",
    },
    {
        "book_title":"A Farewell to Arms",
        "author":"Ernest Hemingway",
    },
    {
        "book_title":"Little House on the Prairie",
        "author":"Laura Wilder",
    },
    {
        "book_title":"Defending Jacob",
        "author":"William Landay",
    },
    {
        "book_title":"Neuromancer",
        "author":"William Gibson",
    },
    {
        "book_title":"The Historian",
        "author":"Elizabeth Kostova",
    },
    {
        "book_title":"For Whom the Bell Tolls",
        "author":"Ernest Hemingway",
    },
    {
        "book_title":"Perfect Chemistry",
        "author":"Simone Ekleles",
    },
    {
        "book_title":"Silence",
        "author":"Becca Fitzpatrick",
    },
    {
        "book_title":"War and Peace",
        "author":"Leo Tolstoy",
    },
    {
        "book_title":"Peter Pan",
        "author":"James Matthew Barrie",
    },
    {
        "book_title":"Betrayed",
        "author":"P.C. Cast and Kristin Cast",
    },
    {
        "book_title":"The Secret History",
        "author":"Donna Tartt",
    },
    {
        "book_title":"Where the Heart is",
        "author":"Billie Letts",
    },
    {
        "book_title":"Dress Your Family in Corduroy and Denim",
        "author":"David Sedaris",
    },
    {
        "book_title":"Just Listen",
        "author":"Sarah Dessen",
    },
    {
        "book_title":"The Invention of Wings",
        "author":"Sue Monk Kidd",
    },
    {
        "book_title":"Living Dead in Dallas",
        "author":"Charlaine Harris",
    },
    {
        "book_title":"After You",
        "author":"Jojo Moyes",
    },
    {
        "book_title":"Naked",
        "author":"David Sedaris",
    },
    {
        "book_title":"The 5 Love Languages",
        "author":"Gary Chapman",
    },
    {
        "book_title":"Maus 1: A survivor’s tale",
        "author":"Art Spiegelman",
    },
    {
        "book_title":"Bel Canto",
        "author":"Ann Patchett",
    },
    {
        "book_title":"Fall of Giants",
        "author":"Ken Follett",
    },
    {
        "book_title":"The Princess Diaries",
        "author":"Meg Cabot",
    },
    {
        "book_title":"A Brief History of Time",
        "author":"Stephen Hawking",
    },
    {
        "book_title":"Robinson Crusoe",
        "author":"Daniel Defoe",
    },
    {
        "book_title":"Pretties",
        "author":"Scott Westerfield",
    },
    {
        "book_title":"Cress",
        "author":"Marissa Meyer",
    },
    {
        "book_title":"The Things They Carried",
        "author":"Tim O’Brien",
    },
    {
        "book_title":"Voyager",
        "author":"Diana Gabaldon",
    },
    {
        "book_title":"Little Fires Everywhere",
        "author":"Celeste Ng",
    },
    {
        "book_title":"Tess of the D’Urbervilles",
        "author":"Thomas Hardy",
    },
    {
        "book_title":"Guns, Germs, and Steel",
        "author":"Jared Diamond",
    },
    {
        "book_title":"Little Bee",
        "author":"Chris Cleave",
    },
    {
        "book_title":"Black Beauty",
        "author":"Anne Sewell",
    },
    {
        "book_title":"The Green Mile",
        "author":"Stephen King",
    },
    {
        "book_title":"The Hiding Place",
        "author":"Corrie Boom",
    },
    {
        "book_title":"Chosen",
        "author":"P.C. Cast and Kristin Cast",
    },
    {
        "book_title":"The Power of Habit",
        "author":"Charles Duhigg",
    },
    {
        "book_title":"Madame Bovary",
        "author":"Gustave Flaubert",
    },
    {
        "book_title":"The Phantom Tollbooth",
        "author":"Norton Juster",
    },
    {
        "book_title":"The Namesake",
        "author":"Jhumpa Lahiri",
    },
    {
        "book_title":"The Woman in Cabin 10",
        "author":"Ruth Ware",
    },
    {
        "book_title":"The Good Earth",
        "author":"Pearl Buck",
    },
    {
        "book_title":"The Prince",
        "author":"Niccolo Machiavelli",
    },
    {
        "book_title":"Club Dead",
        "author":"Charlaine Harris",
    },
    {
        "book_title":"Untamed",
        "author":"P.C. Cast and Kristin Cast",
    },
    {
        "book_title":"The No. 1 Ladies’ Detective Agency",
        "author":"Alexander Smith",
    },
    {
        "book_title":"Snow Crash",
        "author":"Neal Stephenson",
    },
    {
        "book_title":"The Way of Kings",
        "author":"Brandon Sanderson",
    },
    {
        "book_title":"Message in a Bottle",
        "author":"Nicholas",
    },
    {
        "book_title":"The House of Hades",
        "author":"Rick Riordan",
    },
    {
        "book_title":"The Virgin Suicides",
        "author":"Jeffrey Eugenides",
    },
    {
        "book_title":"The God of Small Things",
        "author":"Roy Arundhati",
    },
    {
        "book_title":"Cold Mountain",
        "author":"Charles Frazier",
    },
    {
        "book_title":"Easy",
        "author":"Tammara Webber",
    },
    {
        "book_title":"Pandemonium",
        "author":"Lauren Oliver",
    },
    {
        "book_title":"The Well of Ascension",
        "author":"Brandon Sanderson",
    },
    {
        "book_title":"Killing Floor",
        "author":"Lee Child",
    },
    {
        "book_title":"A Confederacy of Dunces",
        "author":"John Toole",
    },
    {
        "book_title":"The Brief Wondrous Life of Oscar Wao",
        "author":"Junot Diaz",
    },
    {
        "book_title":"The War of the Worlds",
        "author":"H.G. Wells",
    },
    {
        "book_title":"Little House in the Big Woods",
        "author":"Laura Wilder",
    },
    {
        "book_title":"2001: A Space Odyssey",
        "author":"Arthur C. Clarke",
    },
    {
        "book_title":"The Kitchen House",
        "author":"Kathleen Grissom",
    },
    {
        "book_title":"The Angel Experiment",
        "author":"James Patterson",
    },
    {
        "book_title":"The Hound of the Baskervilles",
        "author":"Arthur Conan Doyle",
    },
    {
        "book_title":"The Clan of the Cave Bear",
        "author":"Jean Auel",
    },
    {
        "book_title":"Breakfast of Champions",
        "author":"Kurt Vonnegut",
    },
    {
        "book_title":"Remember Me?",
        "author":"Sophie Kinsella",
    },
    {
        "book_title":"A Million Little Pieces",
        "author":"James Frey",
    },
    {
        "book_title":"The God Delusion",
        "author":"Richard Dawkins",
    },
    {
        "book_title":"Tuck Everlasting",
        "author":"Natalie Babbitt",
    },
    {
        "book_title":"The Purpose Driven Life",
        "author":"Rick Warren",
    },
    {
        "book_title":"I’ll Give You the Sun",
        "author":"Jandy Nelson",
    },
    {
        "book_title":"Speaker of the Dead",
        "author":"Orson Scott Card",
    },
    {
        "book_title":"To All the Boys I’ve Loved Before",
        "author":"Jenny Han",
    },
    {
        "book_title":"American Psycho",
        "author":"Bret Ellis",
    },
    {
        "book_title":"The Truth About Forever",
        "author":"Sarah Dessen",
    },
    {
        "book_title":"The Brothers Karamazov",
        "author":"Fyodor Dostoyevsky",
    },
    {
        "book_title":"The Raven Boys",
        "author":"Maggie Stiefvater",
    },
    {
        "book_title":"The Andromeda Strain",
        "author":"Michael Crichton",
    },
    {
        "book_title":"Torment",
        "author":"Lauren Kate",
    },
    {
        "book_title":"All the Bright Places",
        "author":"Jennifer Niven",
    },
    {
        "book_title":"Obsidian",
        "author":"Jennifer Armentrout",
    },
    {
        "book_title":"The Absolutely True Diary of a Part-Time Indian",
        "author":"Sherman Alexie",
    },
    {
        "book_title":"Crossed",
        "author":"Ally Condie",
    },
    {
        "book_title":"The Restaurant at the End of the Universe",
        "author":"Douglas Adams",
    },
    {
        "book_title":"Fast Food Nation",
        "author":"Eric Schlosser",
    },
    {
        "book_title":"Midnight in the Garden of Good and Evil",
        "author":"John Berendt",
    },
    {
        "book_title":"The Magicians",
        "author":"Lev Grossman",
    },
    {
        "book_title":"Everything I Never Told You",
        "author":"Celeste Ng",
    },
    {
        "book_title":"The Hero of Ages",
        "author":"Brandon Sanderson",
    },
    {
        "book_title":"Something Blue",
        "author":"Emily Giffin",
    },
    {
        "book_title":"Candide",
        "author":"Voltaire",
    },
    {
        "book_title":"The World According to Garp",
        "author":"John Irving",
    },
    {
        "book_title":"A Court of Mist and Fury",
        "author":"Sarah J Maas",
    },
    {
        "book_title":"Go Set a Watchman",
        "author":"Harper Lee",
    },
    {
        "book_title":"Thinking, Fast and Slow",
        "author":"Daniel Kahneman",
    },
    {
        "book_title":"Slammed",
        "author":"Colleen Hoover",
    },
    {
        "book_title":"Shadow and Bone",
        "author":"Leigh Bardugo",
    },
    {
        "book_title":"Postmortem",
        "author":"Patricia Cornwell",
    },
    {
        "book_title":"Cujo",
        "author":"Stephen King",
    },
    {
        "book_title":"The Great Hunt",
        "author":"Robert Jordan",
    },
    {
        "book_title":"Hillbilly Elegy",
        "author":"J.D. Vance",
    },
    {
        "book_title":"Cloud Atlas",
        "author":"David Mitchell",
    },
    {
        "book_title":"Left Behind",
        "author":"Tim LaHaye and Jerry Jenkins",
    },
    {
        "book_title":"Oryx and Crake",
        "author":"Margaret Atwood",
    },
    {
        "book_title":"A Wizard of Earthsea",
        "author":"Ursula LqGuin",
    },
    {
        "book_title":"Dead as a Doornail",
        "author":"Charlaine Harris",
    },
    {
        "book_title":"Assassin’s Apprentice",
        "author":"Robin Hobb",
    },
    {
        "book_title":"It’s Kind of a Funny Story",
        "author":"Ned Vizzini",
    },
    {
        "book_title":"Wall and Peace",
        "author":"Banksy",
    },
    {
        "book_title":"In Her Shoes",
        "author":"Jennifer Weiner",
    },
    {
        "book_title":"The Walking Dead Vol. 1 ",
        "author":"Robert Kirkman",
    },
    {
        "book_title":"The Master and Margarita",
        "author":"Mikhail Bulgakov",
    },
    {
        "book_title":"The Mysterious Affair at Styles",
        "author":"Agatha Christie",
    },
    {
        "book_title":"The Trial",
        "author":"Franz Kafka",
    },
    {
        "book_title":"Mrs. Dalloway",
        "author":"Virginia Woolf",
    },
    {
        "book_title":"Eleanor Oliphant is Completely Fine",
        "author":"Gail Honeyman",
    },
    {
        "book_title":"Heir of Fire",
        "author":"Sarah J Maas",
    },
    {
        "book_title":"Breakfast at Tiffany’s",
        "author":"Truman Capote",
    },
    {
        "book_title":"The Prophet",
        "author":"Kahlil Gibran",
    },
    {
        "book_title":"Milk and Honey",
        "author":"Rupi Kaur",
    },
    {
        "book_title":"Batman: Year One",
        "author":"Frank Miller",
    },
    {
        "book_title":"The Drawing of the Three",
        "author":"Stephen King",
    },
    {
        "book_title":"All Together Dead",
        "author":"Charlaine Harris",
    },
    {
        "book_title":"Inheritance",
        "author":"Christopher Paolini",
    },
    {
        "book_title":"Definitely Dead",
        "author":"Charlaine Harris",
    },
    {
        "book_title":"Saga Vol 1",
        "author":"Brian Vaughan",
    },
    {
        "book_title":"The Wind-Up Bird Chronicle",
        "author":"Haruki Murakami",
    },
    {
        "book_title":"The Silmarillion",
        "author":"J.R.R. Tolkien",
    },
    {
        "book_title":"The Dragon Reborn",
        "author":"Robert Jordan",
    },
    {
        "book_title":"David Copperfield",
        "author":"Charles Dickens",
    },
    {
        "book_title":"Prodigy",
        "author":"Marie Lu",
    },
    {
        "book_title":"Pretty Little Liars",
        "author":"Sara Shepard",
    },
    {
        "book_title":"The Prince of Tides",
        "author":"Pat Conroy",
    },
    {
        "book_title":"Behind Closed Doors",
        "author":"B.A. Paris",
    },
    {
        "book_title":"Mr. Mercedes",
        "author":"Stephen King",
    },
    {
        "book_title":"On Writing: A Memoir of the Craft",
        "author":"Stephen King",
    },
    {
        "book_title":"Needful Things",
        "author":"Stephen King",
    },
    {
        "book_title":"Redeeming Love",
        "author":"Francine Rivers",
    },
    {
        "book_title":"The Martian Chronicles",
        "author":"Ray Bradbury",
    },
    {
        "book_title":"The Language of Flowers",
        "author":"Vanessa Diffenbaugh",
    },
    {
        "book_title":"The Phantom of the Opera – Gaston Leroux",
        "author":"Gaston Leroux",
    },
    {
        "book_title":"Lean In",
        "author":"Sheryl Sandberg",
    },
    {
        "book_title":"Don Quixote",
        "author":"Miguel de Cervantes",
    },
    {
        "book_title":"The Mists of Avalon",
        "author":"Marion Bradley",
    },
    {
        "book_title":"Along for the Ride",
        "author":"Sarah Dessen",
    },
    {
        "book_title":"The Iron King",
        "author":"Julie Kagawa",
    },
    {
        "book_title":"The Life-Changing Magic of Tidying Up",
        "author":"Marie Kondo",
    },
    {
        "book_title":"Life After Life",
        "author":"Kate Atkinson",
    },
    {
        "book_title":"Choke",
        "author":"Chuck Palahniuk",
    },
    {
        "book_title":"The Lincoln Lawyer",
        "author":"Michael Connelly",
    },
    {
        "book_title":"Franny and Zooey",
        "author":"J.D. Salinger",
    },
    {
        "book_title":"Uncle Tom’s Cabin",
        "author":"Harriet Beecher Stowe",
    },
    {
        "book_title":"Are You There God? It’s Me, Margaret",
        "author":"Judy Blume",
    },
    {
        "book_title":"The Storied Life of A.J. Fikry",
        "author":"Gabrielle Zevin",
    },
    {
        "book_title":"The Subtle Art of Not Giving a F*ck",
        "author":"Mark Manson",
    },
    {
        "book_title":"Timeline",
        "author":"Michael Crichton",
    },
    {
        "book_title":"The Silkworm",
        "author":"Robert Galbraith",
    },
    {
        "book_title":"Americanah",
        "author":"Chimamanda Adichie",
    },
    {
        "book_title":"Jonathan Strange & Mr Norrell",
        "author":"Susanna Clarke",
    },
    {
        "book_title":"Zen and the Art of Motorcycle Maintenance",
        "author":"Robert Pirsig",
    },
    {
        "book_title":"Christine",
        "author":"Stephen King",
    },
    {
        "book_title":"Truly Madly Guilty",
        "author":"Liane Moriarty",
    },
    {
        "book_title":"The Forgotten Garden",
        "author":"Kate Morton",
    },
    {
        "book_title":"The Hate U Give",
        "author":"Angie Thomas",
    },
    {
        "book_title":"Cell",
        "author":"Stephen King",
    },
    {
        "book_title":"The Amazing Adventures of Kavalier & Clay",
        "author":"Michael Chabon",
    },
    {
        "book_title":"Anansi Boys",
        "author":"Neil Gaiman",
    },
    {
        "book_title":"The Short Second Life of Bree Tanner",
        "author":"Stephenie Meyer",
    },
    {
        "book_title":"From Dead to Worse",
        "author":"Charlaine Harris",
    },
    {
        "book_title":"Darkly Dreaming Dexter",
        "author":"Jeff Lindsay",
    },
    {
        "book_title":"Unwind",
        "author":"Neal Shusterman",
    },
    {
        "book_title":"Twenty Thousand Leagues Under the Sea",
        "author":"Jules Verne",
    },
    {
        "book_title":"Life, the Universe and Everything",
        "author":"Douglas Adams",
    },
    {
        "book_title":"When You Are Engulfed in Flames",
        "author":"David Sedaris",
    },
    {
        "book_title":"Drums of Autumn",
        "author":"Diana Gabaldon",
    },
    {
        "book_title":"Entwined in You",
        "author":"Sylvia Day",
    },
    {
        "book_title":"Jonathan Livingston Seagull",
        "author":"Richard Bach",
    },
    {
        "book_title":"I’ve Got Your Number",
        "author":"Sophie Kinsella",
    },
    {
        "book_title":"Red Rising",
        "author":"Pierce Brown",
    },
    {
        "book_title":"The Couple Next Door",
        "author":"Shari Lapena",
    },
    {
        "book_title":"Kitchen Confidential",
        "author":"Anthony Bourdain",
    },
    {
        "book_title":"I’d Tell You I Love You, But Then I’d Have to Kill You",
        "author":"Ally Carter",
    },
    {
        "book_title":"Nickel and Dimed",
        "author":"Barbara Ehrenreich",
    },
    {
        "book_title":"Preludes & Nocturnes",
        "author":"Neil Gaiman",
    },
    {
        "book_title":"Gone",
        "author":"Michael Grant",
    },
    {
        "book_title":"The Boys in the Boat",
        "author":"Daniel Brown",
    },
    {
        "book_title":"Beastly",
        "author":"Alex Flinn",
    },
    {
        "book_title":"Every Day",
        "author":"David Levithan",
    },
    {
        "book_title":"This Lullaby",
        "author":"Sarah Dessen",
    },
    {
        "book_title":"Patriot Games",
        "author":"Tom Clancy",
    },
    {
        "book_title":"Dead and Gone",
        "author":"Charlaine Harris",
    },
    {
        "book_title":"World Without End",
        "author":"Ken Follett",
    },
    {
        "book_title":"The DUFF: Designated Ugly Fat Friend",
        "author":"Kody Keplinger",
    },
    {
        "book_title":"Ways of Seeing",
        "author":"John Berger",
    },
    {
        "book_title":"The Lies of Locke Lamora",
        "author":"Scott Lynch",
    },
    {
        "book_title":"Girl Interrupted",
        "author":"Susanna Kaysen",
    },
    {
        "book_title":"Firestarter",
        "author":"Stephen King",
    },
    {
        "book_title":"Heidi",
        "author":"Johanna Spyri",
    },
    {
        "book_title":"Starship Troopers",
        "author":"Robert A. Heinlein",
    },
    {
        "book_title":"Small Great Things",
        "author":"Jodi Picoult",
    },
    {
        "book_title":"Orange is the New Black",
        "author":"Piper Kerman",
    },
    {
        "book_title":"Howl’s Moving Castle",
        "author":"Diana Wynne Jones",
    },
    {
        "book_title":"The Hundred-Year-old Man Who Climbed Out a Window…",
        "author":"Jonas Jonasson",
    },
    {
        "book_title":"The Vampire Lestat",
        "author":"Anne Rice",
    },
    {
        "book_title":"A Monster Calls",
        "author":"Patrick Ness",
    },
    {
        "book_title":"Mort",
        "author":"Terry Pratchett",
    },
    {
        "book_title":"The Bourne Supremacy",
        "author":"Robert Ludlum",
    },
    {
        "book_title":"The Underground Railroad",
        "author":"Colson Whitehead",
    },
    {
        "book_title":"Aristotle and Dante Discover the Secrets of the Universe",
        "author":"Benjamin Saenz",
    },
    {
        "book_title":"High Fidelity",
        "author":"Nick Hornby",
    },
    {
        "book_title":"The Omnivore’s Dilemma",
        "author":"Michael Pollan",
    },
    {
        "book_title":"Death of a Salesman",
        "author":"Arthur Miller",
    },
    {
        "book_title":"Sophie’s World",
        "author":"Jostein Garrder",
    },
    {
        "book_title":"King Lear",
        "author":"William Shakespeare",
    },
    {
        "book_title":"Lover Eternal",
        "author":"J.R. Ward",
    },
    {
        "book_title":"1Q84",
        "author":"Haruki Murakami",
    },
    {
        "book_title":"Six of Crows",
        "author":"Leigh Bardugo",
    },
    {
        "book_title":"The Passage",
        "author":"Justin Cronin",
    },
    {
        "book_title":"A Heartbreaking Work of Staggering Genius",
        "author":"Dave Eggers",
    },
    {
        "book_title":"1776",
        "author":"David McCullough",
    },
    {
        "book_title":"Simon vs. the Homo Sapiens Agenda",
        "author":"Becky Albertalli",
    },
    {
        "book_title":"The Rescue",
        "author":"Nicholas Sparks",
    },
    {
        "book_title":"From the Mixed-Up Files of Mrs. Basil E. Frankenweiler",
        "author":"E.L. Konigsburg",
    },
    {
        "book_title":"Specials",
        "author":"Scott Westerfield",
    },
    {
        "book_title":"The Circle",
        "author":"Dave Eggers",
    },
    {
        "book_title":"The Wind in the Willows",
        "author":"Kenneth Grahame",
    },
    {
        "book_title":"Bloodlines",
        "author":"Richelle Mead",
    },
    {
        "book_title":"A People’s History of the United States",
        "author":"Howard Zinn",
    },
    {
        "book_title":"Hollow City",
        "author":"Ransom Riggs",
    },
    {
        "book_title":"Wallbanger",
        "author":"Alice Clayton",
    },
    {
        "book_title":"A Visit from the Good Squad",
        "author":"Jennifer Egan",
    },
    {
        "book_title":"Homegoing",
        "author":"Yaa Gyasi",
    },
    {
        "book_title":"The Waste Lands",
        "author":"Stephen King",
    },
    {
        "book_title":"On Dublin Street",
        "author":"Samantha Young",
    },
    {
        "book_title":"Shogun",
        "author":"James Clavell",
    },
    {
        "book_title":"The House of the Spirits",
        "author":"Isabel Allende",
    },
    {
        "book_title":"Dreams from My Father",
        "author":"Barack Obama",
    },
    {
        "book_title":"The Remains of the Day",
        "author":"Kazuo Ishiguro",
    },
    {
        "book_title":"Around the World in Eighty Days",
        "author":"Jules Verne",
    },
    {
        "book_title":"Everything is Illuminated",
        "author":"Jonathan Safran Foer",
    },
    {
        "book_title":"Hunted",
        "author":"P.C. Cast and Kristin Cast",
    },
    {
        "book_title":"The Good Girl",
        "author":"Mary Kubica",
    },
    {
        "book_title":"Walking Disaster",
        "author":"Jamie McGuire",
    },
    {
        "book_title":"Mrs. Frisby and the Rats of NIMH",
        "author":"Robert C. O’Brien",
    },
    {
        "book_title":"The Heir",
        "author":"Kiera Cass",
    },
    {
        "book_title":"The Reader",
        "author":"Bernhard Schlink",
    },
    {
        "book_title":"The Awakening",
        "author":"Kate Chopin",
    },
    {
        "book_title":"Blindness",
        "author":"Jose Saramago",
    },
    {
        "book_title":"Queen of Shadows",
        "author":"Sarah J Maas",
    },
    {
        "book_title":"Different Seasons",
        "author":"Stephen King",
    },
    {
        "book_title":"Fallen Too Far",
        "author":"Abbi Glines",
    },
    {
        "book_title":"The Rainmaker",
        "author":"John Grisham",
    },
    {
        "book_title":"Bag of Bones",
        "author":"Stephen King",
    },
    {
        "book_title":"Sapiens: A Brief History of Humankind",
        "author":"Yuval Noah Harari",
    },
    {
        "book_title":"The Guardian",
        "author":"Nicholas Sparks",
    },
    {
        "book_title":"The Autobiography of Malcolm X",
        "author":"Malcolm X",
    },
    {
        "book_title":"Thinner",
        "author":"Stephen King",
    },
    {
        "book_title":"Batman: The Dark Knight Returns",
        "author":"Frank Miller",
    },
    {
        "book_title":"Snow Falling on Cedars",
        "author":"David Guterson",
    },
    {
        "book_title":"Moon Called",
        "author":"Patricia Briggs",
    },
    {
        "book_title":"Lover Awakened",
        "author":"J.R. Ward",
    },
    {
        "book_title":"The Dead Zone",
        "author":"Stephen King",
    },
    {
        "book_title":"The Girl with all the Gifts",
        "author":"M.R. Carey",
    },
    {
        "book_title":"The Blood of Olympus",
        "author":"Rick Riordan",
    },
    {
        "book_title":"Firefly Lane",
        "author":"Kristin Hannah",
    },
    {
        "book_title":"Into the Water",
        "author":"Rachel Hawkins",
    },
    {
        "book_title":"Scott Pilgrim, Vol 1",
        "author":"Bryan Lee O’Malley",
    },
    {
        "book_title":"The Exorcist",
        "author":"William Peter Blatty",
    },
    {
        "book_title":"The Hunchback of Notre Dame",
        "author":"Victor Hugo",
    },
    {
        "book_title":"State of Wonder",
        "author":"Ann Patchett",
    },
    {
        "book_title":"Prey",
        "author":"Michael Crichton",
    },
    {
        "book_title":"Hyperbole and a Half",
        "author":"Allie Brosh",
    },
    {
        "book_title":"Sphere",
        "author":"Michael Crichton",
    },
    {
        "book_title":"Turtles All the Way Down",
        "author":"John Green",
    },
    {
        "book_title":"Plain Truth",
        "author":"Jodi Picoult",
    },
    {
        "book_title":"Mr. Penumbra’s 24-Hour Bookstore",
        "author":"Robin Sloan",
    },
    {
        "book_title":"Veronika Decides to Die",
        "author":"Paulo Coelho",
    },
    {
        "book_title":"The Invention of Hugo Cabret",
        "author":"Brian Selznick",
    },
    {
        "book_title":"Hyperion",
        "author":"Dan Simmons",
    },
    {
        "book_title":"The Summoning",
        "author":"Kelley Armstrong",
    },
    {
        "book_title":"Fire",
        "author":"Kristin Cashore",
    },
    {
        "book_title":"Tempted",
        "author":"P.C. Cast and Kristin Cast",
    },
    {
        "book_title":"Dead in the Family",
        "author":"Charlaine Harris",
    },
    {
        "book_title":"Stiff: The Curious Lives of Human Cadavers",
        "author":"Mary Roach",
    },
    {
        "book_title":"Nights in Rodanthe",
        "author":"Nicholas Sparks",
    },
    {
        "book_title":"Congo",
        "author":"Michael Crichton",
    },
    {
        "book_title":"The Cider House Rules",
        "author":"John Irving",
    },
    {
        "book_title":"The Sound and the Fury",
        "author":"William Faulkner",
    },
    {
        "book_title":"Midwives",
        "author":"Chris Bohjalian",
    },
    {
        "book_title":"Pippy Longstocking",
        "author":"Astrid Lindgren",
    },
    {
        "book_title":"Batman: The Killing Joke",
        "author":"Alan Moore",
    },
    {
        "book_title":"Are You There, Vodka? It’s Me, Chelsea",
        "author":"Chelsea Handler",
    },
    {
        "book_title":"Angelfall",
        "author":"Susan Ee",
    },
    {
        "book_title":"Let’s Pretend This Never Happened",
        "author":"Jenny Lawson",
    },
    {
        "book_title":"Born a Crime: Stories from a South African Childhood",
        "author":"Trevor Noah",
    },
    {
        "book_title":"The Shadow Rising",
        "author":"Robert Jordan",
    },
    {
        "book_title":"Wicked Lovely",
        "author":"Melissa Marr",
    },
    {
        "book_title":"Naked in Death",
        "author":"J.D. Robb",
    },
    {
        "book_title":"Men are from Mars, Women are from Venus",
        "author":"John Gray",
    },
    {
        "book_title":"The Corrections",
        "author":"Jonathan Franzen",
    },
    {
        "book_title":"Love the One You’re With",
        "author":"Emily Giffin",
    },
    {
        "book_title":"The White Queen",
        "author":"Philippa Gregory",
    },
    {
        "book_title":"The Storyteller",
        "author":"Jodi Picoult",
    },
    {
        "book_title":"Champion",
        "author":"Marie Lu",
    },
    {
        "book_title":"The Merchant of Venice",
        "author":"William Shakespeare",
    },
    {
        "book_title":"Julie and Julia: 365 Days, 524 Recipes, 1 Tiny Apartment…",
        "author":"Julie Powell",
    },
    {
        "book_title":"A Long Way Gone: Memoirs of a Boy Soldier",
        "author":"Ishmael Beah",
    },
    {
        "book_title":"Linger",
        "author":"Maggie Stiefvater",
    },
    {
        "book_title":"Beautiful Ruins",
        "author":"Jess Walter",
    },
    {
        "book_title":"The Unbecoming of Mara Dyer",
        "author":"Michelle Hodkin",
    },
    {
        "book_title":"Twelth Night",
        "author":"William Shakespeare",
    },
    {
        "book_title":"Just Kids",
        "author":"Patti Smith",
    },
    {
        "book_title":"Interpreter of Maladies",
        "author":"Jhumpa Lahiri",
    },
    {
        "book_title":"The Choice",
        "author":"Nicholas Sparks",
    },
    {
        "book_title":"Freedom",
        "author":"Jonathan Franzen",
    },
    {
        "book_title":"Attachments",
        "author":"Rainbow Rowell",
    },
    {
        "book_title":"Winter",
        "author":"Marissa Meyer",
    },
    {
        "book_title":"Gathering Blue",
        "author":"Lois Lowry",
    },
    {
        "book_title":"Invisible Man",
        "author":"Ralph Ellison",
    },
    {
        "book_title":"Baby Proof",
        "author":"Emily Giffin",
    },
    {
        "book_title":"A is for Alibi",
        "author":"Sue Grafton",
    },
    {
        "book_title":"Maybe Someday",
        "author":"Colleen Hoover",
    },
    {
        "book_title":"Elon Musk",
        "author":"Ashlee Vance",
    },
    {
        "book_title":"The Constant Princess",
        "author":"Philippa Gregory",
    },
    {
        "book_title":"The Power of Now: A Guide to Spiritual Enlightenment",
        "author":"Eckhart Tolle",
    },
    {
        "book_title":"Wizard and Glass",
        "author":"Stephen King",
    },
    {
        "book_title":"The Wide Window",
        "author":"Lemony Snicket",
    },
    {
        "book_title":"Twenties Girl",
        "author":"Sophie Kinsella",
    },
    {
        "book_title":"Words of Radiance",
        "author":"Brandon Sanderson",
    },
    {
        "book_title":"Dark Matter",
        "author":"Blake Crouch",
    },
    {
        "book_title":"The Silver Linings Playbook",
        "author":"Matthew Quick",
    },
    {
        "book_title":"The Westing Game",
        "author":"Ellen Raskin",
    },
    {
        "book_title":"The Republic",
        "author":"Plato",
    },
    {
        "book_title":"Think and Grow Rich",
        "author":"Napoleon Hill",
    },
    {
        "book_title":"Landline",
        "author":"Rainbow Rowell",
    },
    {
        "book_title":"The Tale of Despereaux",
        "author":"Kate DiCamillo",
    },
    {
        "book_title":"Unravel Me",
        "author":"Tahereh Mafi",
    },
    {
        "book_title":"The White Tiger",
        "author":"Aravind Adiga",
    },
    {
        "book_title":"Lamb: The Gospel According to Biff",
        "author":"Christopher Moore",
    },
    {
        "book_title":"Shutter Island",
        "author":"Dennis Lehane",
    },
    {
        "book_title":"Between the World and Me",
        "author":"Ta-Nehisi Coates",
    },
    {
        "book_title":"Born to Run",
        "author":"Christopher McDougall",
    },
    {
        "book_title":"The Edge of Never",
        "author":"J.A. Redmerski",
    },
    {
        "book_title":"Darkfever",
        "author":"Karen Marie Moning",
    },
    {
        "book_title":"Ender’s Shadow",
        "author":"Orson Scott Card",
    },
    {
        "book_title":"The Fiery Cross",
        "author":"Diana Gabaldon",
    },
    {
        "book_title":"Two for the Dough",
        "author":"Janet Evanovich",
    },
    {
        "book_title":"Origin",
        "author":"Dan Brown",
    },
    {
        "book_title":"Before We Were Yours",
        "author":"Lisa Wingate",
    },
    {
        "book_title":"Under the Banner of Heaven",
        "author":"Jon Krakauer",
    },
    {
        "book_title":"Dreamcatcher",
        "author":"Stephen King",
    },
    {
        "book_title":"The Throne of Fire",
        "author":"Rick Riordan",
    },
    {
        "book_title":"Modern Romance",
        "author":"Aziz Ansari",
    },
    {
        "book_title":"Burned",
        "author":"P.C. Cast and Kristin Cast",
    },
    {
        "book_title":"In the Garden of Beasts",
        "author":"Erik Larson",
    },
    {
        "book_title":"The Bone Collector",
        "author":"Jeffery Deaver",
    },
    {
        "book_title":"Steal Like an Artist",
        "author":"Austin Kleon",
    },
    {
        "book_title":"Lock and Key – Sarah Dessen",
        "author":"Sarah Dessen",
    },
    {
        "book_title":"Fool Moon",
        "author":"Jim Butcher",
    },
    {
        "book_title":"Lola and the Boy Next Door",
        "author":"Stephanie Perkins",
    },
    {
        "book_title":"Gabriel’s Inferno",
        "author":"Sylvain Reynard",
    },
    {
        "book_title":"Guards! Guards!",
        "author":"Terry Pratchett",
    },
    {
        "book_title":"The Complete Grimm’s Fairy Tales",
        "author":"Jacob Grimm",
    },
    {
        "book_title":"Passion",
        "author":"Lauren Kate",
    },
    {
        "book_title":"The Kill Order",
        "author":"James Dashner",
    },
    {
        "book_title":"Crazy Rich Asians",
        "author":"Kevin Kwan",
    },
    {
        "book_title":"Artemis Fowl and the Lost Colony",
        "author":"Eoin Colfer",
    },
    {
        "book_title":"Ugly Love",
        "author":"Colleen Hoover",
    },
    {
        "book_title":"Flowers in the Attic",
        "author":"V.C. Andrews",
    },
    {
        "book_title":"Persepolis: The Story of Childhood",
        "author":"Marjane Satrapi",
    },
    {
        "book_title":"The Lean Startup",
        "author":"Eric Ries",
    },
    {
        "book_title":"Why Not Me?",
        "author":"Mindy Kaling",
    },
    {
        "book_title":"The Four Agreements",
        "author":"Miguel Ruiz",
    },
    {
        "book_title":"Point of Retreat",
        "author":"Colleen Hoover",
    },
    {
        "book_title":"Doctor Sleep",
        "author":"Stephen King",
    },
    {
        "book_title":"The Bluest Eye",
        "author":"Toni Morrison",
    },
    {
        "book_title":"Waiting for Godot",
        "author":"Samuel Beckett",
    },
    {
        "book_title":"Roots: The Saga of an American Family",
        "author":"Alex Haley",
    },
    {
        "book_title":"Wolf Hall",
        "author":"Hilary Mantel",
    },
    {
        "book_title":"The Wedding",
        "author":"Nicholas Sparks",
    },
    {
        "book_title":"We Need to Talk About Kevin",
        "author":"Lionel Shriver",
    },
    {
        "book_title":"The Man Who Mistook His Wife for a Hat",
        "author":"Oliver Sacks",
    },
    {
        "book_title":"A Room with a View",
        "author":"E.M. Forster",
    },
    {
        "book_title":"Suzanne’s Diary for Nicholas",
        "author":"James Patterson",
    },
    {
        "book_title":"It Ends with Us",
        "author":"Colleen Hoover",
    },
    {
        "book_title":"A Bend in the Road",
        "author":"Nicholas Sparks",
    },
    {
        "book_title":"The Man in the High Castle",
        "author":"Philip K. Dick",
    },
    {
        "book_title":"Wolves of the Calla",
        "author":"Stephen King",
    },
    {
        "book_title":"Beautiful Bastard",
        "author":"Christina Lauren",
    },
    {
        "book_title":"Onyx",
        "author":"Jennifer L. Armentrout",
    },
    {
        "book_title":"Thoughtless",
        "author":"S.C. Stephens",
    },
    {
        "book_title":"The Elegance of the Hedgehog",
        "author":"Muriel Barberry",
    },
    {
        "book_title":"The Best of Me",
        "author":"Nicholas Sparks",
    },
    {
        "book_title":"A Court of Wings and Ruin",
        "author":"Sarah J Maas",
    },
    {
        "book_title":"House Rules",
        "author":"Jodi Picoult",
    },
    {
        "book_title":"Half Broke Horses",
        "author":"Jeannette Walls",
    },
    {
        "book_title":"Hex Hall",
        "author":"Rachel Hawkins",
    },
    {
        "book_title":"The Girls",
        "author":"Emma Cline",
    },
    {
        "book_title":"The Unlikely Pillgrimage of Harold Fry",
        "author":"Rachel Joyce",
    },
    {
        "book_title":"Eleven Minutes",
        "author":"Paulo Coelho",
    },
    {
        "book_title":"Foundation and Empire",
        "author":"Isaac Asimov",
    },
    {
        "book_title":"Shantaram",
        "author":"Gregory David Roberts",
    },
    {
        "book_title":"Elantris",
        "author":"Brandon Sanderson",
    },
    {
        "book_title":"Lonesome Dove",
        "author":"Larry McMurtry",
    },
    {
        "book_title":"The Way of Shadows",
        "author":"Brent Weeks",
    },
    {
        "book_title":"A New Earth: Awakening to Your Life’s Purpose",
        "author":"Eckhart Tolle",
    },
    {
        "book_title":"The Black Echo",
        "author":"Michael Connelly",
    },
    {
        "book_title":"Sh*t My Dad Says",
        "author":"Justin Halpern",
    },
    {
        "book_title":"The Sense of an Ending",
        "author":"Julian Barnes",
    },
    {
        "book_title":"The Kife of Never Letting Go",
        "author":"Patrick Ness",
    },
    {
        "book_title":"Reached",
        "author":"Ally Condie",
    },
    {
        "book_title":"Seabiscuit: An American Legend",
        "author":"Laura Hillenbrand",
    },
    {
        "book_title":"Old Man’s War",
        "author":"John Scalzi",
    },
    {
        "book_title":"Blue Bloods",
        "author":"Melissa Cruz",
    },
    {
        "book_title":"The Girls’ Guide to Hunting and Fishing",
        "author":"Melissa Bank",
    },
    {
        "book_title":"Three to Get Deadly",
        "author":"Janet Evanovich",
    },
    {
        "book_title":"Watchers",
        "author":"Dean Koontz",
    },
    {
        "book_title":"Crazy Love: Overhelmed by a Relentless God",
        "author":"Francis Chan",
    },
    {
        "book_title":"Brain on Fire: My Month of Madness",
        "author":"Susannah Cahalan",
    },
    {
        "book_title":"Angus, Thongs, and Full-Frontal Snogging",
        "author":"Louise Rennison",
    },
    {
        "book_title":"Night Shift",
        "author":"Stephen King",
    },
    {
        "book_title":"The Nest",
        "author":"Cynthia D’Aprix Sweeney",
    },
    {
        "book_title":"Shadow of Night",
        "author":"Deborah Harkness",
    },
    {
        "book_title":"Xenocide",
        "author":"Orson Scott Card",
    },
    {
        "book_title":"Team of Rivals",
        "author":"Doris Kearns Goodwin",
    },
    {
        "book_title":"The Blade Itself",
        "author":"Joe Abercrombie",
    },
    {
        "book_title":"Abrahan Lincoln: Vampire Hunter",
        "author":"Seth Grahame-Smith",
    },
    {
        "book_title":"The Alchemyst",
        "author":"Michael Scott",
    },
    {
        "book_title":"The Plague",
        "author":"Albert Camus",
    },
    {
        "book_title":"Glass Sword",
        "author":"Victoria Aveyard",
    },
    {
        "book_title":"Nine Stories",
        "author":"J.D. Salinger",
    },
    {
        "book_title":"Shanghai Girls",
        "author":"Lisa See",
    },
    {
        "book_title":"An Ember in the Ashes",
        "author":"Sabaa Tahir",
    },
    {
        "book_title":"The Bean Trees",
        "author":"Barbara Kingsolver",
    },
    {
        "book_title":"Wait for You",
        "author":"J. Lynn",
    },
    {
        "book_title":"Journey to the Center of the Earth",
        "author":"Jules Verne",
    },
    {
        "book_title":"Guilty Pleasures",
        "author":"Laurell K. Hamilton",
    },
    {
        "book_title":"One Plus One",
        "author":"Jojo Moyes",
    },
    {
        "book_title":"Smile",
        "author":"Raina Telgemeier",
    },
    {
        "book_title":"Finale",
        "author":"Becca Fitzpatrick",
    },
    {
        "book_title":"The Summer I Turned Pretty",
        "author":"Jenny Han",
    },
    {
        "book_title":"The Joy of Cooking",
        "author":"Irma S. Rombauer",
    },
    {
        "book_title":"Halfway to the Grave – Jeaniene Frost",
        "author":"",
    },
    {
        "book_title":"Tales of a Fourth Grade Nothing",
        "author":"Judy Blume",
    },
    {
        "book_title":"Olive Kitteridge",
        "author":"Elizabeth Strout",
    },
    {
        "book_title":"The Audacity of Hope",
        "author":"Barack Obama",
    },
    {
        "book_title":"North and South",
        "author":"Elizabeth Gaskell",
    },
    {
        "book_title":"So Long, and Thanks for all the Fish",
        "author":"Douglas Adams",
    },
    {
        "book_title":"The Art Book",
        "author":"Phaidon Press",
    },
    {
        "book_title":"The Witch of Blackbird Pond",
        "author":"Elizabeth George Speare",
    },
    {
        "book_title":"This is Where I Leave You",
        "author":"Jonathan Tropper",
    },
    {
        "book_title":"Trainspotting",
        "author":"Irvine Welsh",
    },
    {
        "book_title":"The Blind Assassin",
        "author":"Margaret Atwood",
    },
    {
        "book_title":"The Miserable Mill",
        "author":"Lemony Snicket",
    },
    {
        "book_title":"Inferno",
        "author":"Dante Alighieri",
    },
    {
        "book_title":"No Country for Old Men",
        "author":"Cormac McCarthy",
    },
    {
        "book_title":"The Sweetness at the Bottom of the Pie",
        "author":"Alan Bradley",
    },
    {
        "book_title":"As I Lay Dying",
        "author":"William Faulkner",
    },
    {
        "book_title":"Insomnia",
        "author":"Stephen King",
    },
    {
        "book_title":"The Dark Tower",
        "author":"Stephen King",
    },
    {
        "book_title":"Royal Assassin",
        "author":"Robin Hobb",
    },
    {
        "book_title":"My Life Next Door",
        "author":"Huntley Fitzpatrick",
    },
    {
        "book_title":"Between Shades of Gray",
        "author":"Ruta Sepetys",
    },
    {
        "book_title":"The Alienist",
        "author":"Caleb Carr",
    },
    {
        "book_title":"Poison Study",
        "author":"Maria V. Snyder",
    },
    {
        "book_title":"Middlemarch",
        "author":"George Eliot",
    },
    {
        "book_title":"Lady Midnight",
        "author":"Cassandra Clare",
    },
    {
        "book_title":"A Little Life",
        "author":"Hanya Yanagihara",
    },
    {
        "book_title":"Naruto, Vol 1",
        "author":"Masahi Kishimoto",
    },
    {
        "book_title":"Four Score",
        "author":"Janet Evanovich",
    },
    {
        "book_title":"The Shipping News",
        "author":"Annie Prouix",
    },
    {
        "book_title":"Major Pettigrew’s Last Stand",
        "author":"Helen Simonson",
    },
    {
        "book_title":"Schingler’s List",
        "author":"Thomas Keneally",
    },
    {
        "book_title":"My Brilliant Friend",
        "author":"Elena Ferrante",
    },
    {
        "book_title":"Falling Up",
        "author":"Shel Silverstein",
    },
    {
        "book_title":"Carry On – Rainbow Rowell",
        "author":"Rainbow Rowell",
    },
    {
        "book_title":"Career of Evil",
        "author":"Robert Galbraith",
    },
    {
        "book_title":"The Story of My Life",
        "author":"Helen Keller",
    },
    {
        "book_title":"Jaws",
        "author":"Peter Benchley",
    },
    {
        "book_title":"Anne of Avonlea",
        "author":"L.M. Montgomery",
    },
    {
        "book_title":"Year of Wonders",
        "author":"Geraldine Brooks",
    },
    {
        "book_title":"Surely You’re Joking, Mr. Feynman!",
        "author":"Richard Feynman",
    },
    {
        "book_title":"The Jungle",
        "author":"Upton Sinclair",
    },
    {
        "book_title":"David and Goliath",
        "author":"Malcolm Gladwell",
    },
    {
        "book_title":"About a Boy",
        "author":"Nick Hornby",
    },
    {
        "book_title":"Requiem",
        "author":"Lauren Oliver",
    },
    {
        "book_title":"Grave Peril",
        "author":"Jim Butcher",
    },
    {
        "book_title":"Deja Dead",
        "author":"Kathy Reichs",
    },
    {
        "book_title":"Steelheart",
        "author":"Brandon Sanderson",
    },
    {
        "book_title":"Anthem",
        "author":"Ayn Rand",
    },
    {
        "book_title":"Clear and Present Danger",
        "author":"Tom Clancy",
    },
    {
        "book_title":"The Happiness Project",
        "author":"Gretchen Rubin",
    },
    {
        "book_title":"Pretty Girls",
        "author":"Karin Slaughter",
    },
    {
        "book_title":"Curious George",
        "author":"H.A. Rey",
    },
    {
        "book_title":"Vision in White",
        "author":"Nora Roberts",
    },
    {
        "book_title":"Second Foundation",
        "author":"Isaac Asimov",
    },
    {
        "book_title":"Luckiest Girl Alive",
        "author":"Jessica Knoll",
    },
    {
        "book_title":"A Gentleman in Moscow",
        "author":"Amor Towles",
    },
    {
        "book_title":"The Hours",
        "author":"Michael Cunningham",
    },
    {
        "book_title":"Equal Rites",
        "author":"Terry Pratchett",
    },
    {
        "book_title":"I am the Messenger",
        "author":"Markus Zusak",
    },
    {
        "book_title":"Harold and the Purple Crayon",
        "author":"Crockett Johnson",
    },
    {
        "book_title":"Gerald’s Game",
        "author":"Stephen King",
    },
    {
        "book_title":"A Breath of Snow and Ash",
        "author":"Diana Gabaldon",
    },
    {
        "book_title":"Awakened",
        "author":"P.C. Cast and Kristin Cast",
    },
    {
        "book_title":"The Austere Academy",
        "author":"Lemony Snicket",
    },
    {
        "book_title":"Crank",
        "author":"Ellen Hopkins",
    },
    {
        "book_title":"Murder at the Vicarage",
        "author":"Agatha Christie",
    },
    {
        "book_title":"The Forever war",
        "author":"Joe Haldeman",
    },
    {
        "book_title":"The Fires of Heaven",
        "author":"Robert Jordan",
    },
    {
        "book_title":"Rework",
        "author":"Jason Fried",
    },
    {
        "book_title":"The Secret Keeper",
        "author":"Kate Morton",
    },
    {
        "book_title":"The Girl You Left Behind",
        "author":"Jojo Moyes",
    },
    {
        "book_title":"Siege and Storm",
        "author":"Leigh Bardugo",
    },
    {
        "book_title":"Paradise Lost",
        "author":"John Milton",
    },
    {
        "book_title":"Beautiful Darkness",
        "author":"Kami Garcia",
    },
    {
        "book_title":"The Woman in White",
        "author":"Wilkie Collins",
    },
    {
        "book_title":"The Chamber",
        "author":"John Grisham",
    },
    {
        "book_title":"For One More Day",
        "author":"Mitch Albom",
    },
    {
        "book_title":"A Darker Shade of Magic",
        "author":"Victoria Schwab",
    },
    {
        "book_title":"Shopaholic & Baby",
        "author":"Sophie Kinsella",
    },
    {
        "book_title":"Rendezvous with Rama",
        "author":"Arthur C. Clarke",
    },
    {
        "book_title":"The Year of Magical Thinking",
        "author":"Joan Didion",
    },
    {
        "book_title":"The Big Short: Inside the Doomsday Machine",
        "author":"Michael Lewis",
    },
    {
        "book_title":"The Power of Six",
        "author":"Pittacus Lore",
    },
    {
        "book_title":"Lover Revealed",
        "author":"J.R. Ward",
    },
    {
        "book_title":"House of Sand and Fog",
        "author":"Andre Dubus",
    },
    {
        "book_title":"The Selfish Gene",
        "author":"Richard Dawkins",
    },
    {
        "book_title":"A Beautiful Mind",
        "author":"Sylvia Nasar",
    },
    {
        "book_title":"A Fine Balance",
        "author":"Rohinton Mistry",
    },
    {
        "book_title":"The Girl Who Loved Tom Gordon",
        "author":"Stephen King",
    },
    {
        "book_title":"Bird Box",
        "author":"Josh Malerman",
    },
    {
        "book_title":"A Portrait of the Artist as a Young Man",
        "author":"James Joyce",
    },
    {
        "book_title":"The History of Love",
        "author":"Nicole Krauss",
    },
    {
        "book_title":"The Dinner",
        "author":"Herman Koch",
    },
    {
        "book_title":"The Sword of Summer",
        "author":"Rick Riordan",
    },
    {
        "book_title":"Dead Reckoning – Charlaine Harris",
        "author":"Charlaine Harris",
    },
    {
        "book_title":"Lover Unbound",
        "author":"J.R. Ward",
    },
    {
        "book_title":"People of the Book",
        "author":"Geraldine Brooks",
    },
    {
        "book_title":"Lilac Girls",
        "author":"Martha Hall Kelly",
    },
    {
        "book_title":"The Deep End of the Ocean",
        "author":"Jacquelyn Mitchard",
    },
    {
        "book_title":"Leaving Time",
        "author":"Jodi Picoult",
    },
    {
        "book_title":"Rodrick Rules",
        "author":"Jeff Kinney",
    },
    {
        "book_title":"The Surgeon",
        "author":"Tess Gerritsen",
    },
    {
        "book_title":"Effortless",
        "author":"S.C. Stephens",
    },
    {
        "book_title":"The Bonesetter’s Daughter",
        "author":"Amy Tan",
    },
    {
        "book_title":"The Gathering Storm",
        "author":"Robert Jordan",
    },
    {
        "book_title":"Steppenwolf",
        "author":"Hermann Hesse",
    },
    {
        "book_title":"Reconstructing Amelia",
        "author":"Kimberly McCreight",
    },
    {
        "book_title":"Hot Six",
        "author":"Janet Evanovich",
    },
    {
        "book_title":"The Scarlet Pimpernel",
        "author":"Emmuska Orczy",
    },
    {
        "book_title":"The Invisible Man",
        "author":"H.G. Wells",
    },
    {
        "book_title":"The Darkest Minds",
        "author":"Alexandra Bracken",
    },
    {
        "book_title":"Anne of the Island",
        "author":"L.M. Montgomery",
    },
    {
        "book_title":"Beneath a Scarlet Sky",
        "author":"Mark Sullivan",
    },
    {
        "book_title":"Song of Susannah",
        "author":"Stephen King",
    },
    {
        "book_title":"Empire of Storms",
        "author":"Sarah J Maas",
    },
    {
        "book_title":"The Tenth Circle",
        "author":"Jodi Picoult",
    },
    {
        "book_title":"My Antonia",
        "author":"Willa Cather",
    },
    {
        "book_title":"Maniac Magee",
        "author":"Jerry Spinelli",
    },
    {
        "book_title":"Far from the Madding Crowd",
        "author":"Thomas Hardy",
    },
    {
        "book_title":"Eye of the Needle",
        "author":"Ken Follett",
    },
    {
        "book_title":"Dolores Claiborne",
        "author":"Stephen King",
    },
    {
        "book_title":"Opal",
        "author":"Jennifer L. Armentrout",
    },
    {
        "book_title":"Never Too Far",
        "author":"Abbi Glines",
    },
    {
        "book_title":"Childhood’s End",
        "author":"Arthur C. Clarke",
    },
    {
        "book_title":"Pushing the Limits",
        "author":"Katie McGarry",
    },
    {
        "book_title":"Not that Kind of Girl",
        "author":"Lena Dunham",
    },
    {
        "book_title":"Summer Knight",
        "author":"Jim Butcher",
    },
    {
        "book_title":"Leviathan Wakes",
        "author":"James S.A. Corey",
    },
    {
        "book_title":"Jemima J",
        "author":"Jane Green",
    },
    {
        "book_title":"Towers of Midnight",
        "author":"Robert Jordan",
    },
    {
        "book_title":"Me and Earl and the Dying Girl",
        "author":"Jesse Andrews",
    },
    {
        "book_title":"High Five",
        "author":"Janet Evanovich",
    },
    {
        "book_title":"The Ersatz Elevator",
        "author":"Lemony Snicket",
    },
    {
        "book_title":"Lord of Chaos",
        "author":"Robert Jordan",
    },
    {
        "book_title":"School’s Out – Forever",
        "author":"James Patterson",
    },
    {
        "book_title":"Maus II: And here my troubles began",
        "author":"Art Spiegelman",
    },
    {
        "book_title":"SuperFreakonomics",
        "author":"Steven Levitt",
    },
    {
        "book_title":"The Dark Half",
        "author":"Stephen King",
    },
    {
        "book_title":"Desperation",
        "author":"Stephen King",
    },
    {
        "book_title":"Ignite Me",
        "author":"Tahereh Mafi",
    },
    {
        "book_title":"Across the Universe",
        "author":"Beth Revis",
    },
    {
        "book_title":"Rules of Civility",
        "author":"Amor Towles",
    },
    {
        "book_title":"To the Lighthouse",
        "author":"Virginia Woolf",
    },
    {
        "book_title":"Aesop’s Fables",
        "author":"Aesop",
    },
    {
        "book_title":"Tell the Wolves I’m Home",
        "author":"Carol Rifka Brunt",
    },
    {
        "book_title":"Helter Skelter: The True Story of the Manson Murders",
        "author":"Vincent Bugliosi",
    },
    {
        "book_title":"Vanity Fair",
        "author":"William Thackeray",
    },
    {
        "book_title":"The Coincidence of Callie & Kayden",
        "author":"Jessica Sorensen",
    },
    {
        "book_title":"The Vile Village",
        "author":"Lemony Snicket",
    },
    {
        "book_title":"Mystic River",
        "author":"Dennis Lehane",
    },
    {
        "book_title":"Shopaholic Takes Manhattan",
        "author":"Sophie Kinsella",
    },
    {
        "book_title":"Contact",
        "author":"Carl Sagan",
    },
    {
        "book_title":"The Tommyknockers",
        "author":"Stephen King",
    },
    {
        "book_title":"Reading Lolita in Tehran",
        "author":"Azar Nafisi",
    },
    {
        "book_title":"The Dream Thieves",
        "author":"Maggie Stiefvater",
    },
    {
        "book_title":"Life as We Knew It",
        "author":"Susan Beth Pfeffer",
    },
    {
        "book_title":"The Marriage Plot",
        "author":"Jeffrey Eugenides",
    },
    {
        "book_title":"A Crown of Swords",
        "author":"Robert Jordan",
    },
    {
        "book_title":"Annihilation",
        "author":"Jeff VanderMeer",
    },
    {
        "book_title":"The Mysterious Benedict Society",
        "author":"Trenton Lee Stewart",
    },
    {
        "book_title":"Dirk Gently’s Holistic Detective Agency",
        "author":"Douglas Adams",
    },
    {
        "book_title":"Seven Up",
        "author":"Janet Evanovich",
    },
    {
        "book_title":"The Iron Daughter",
        "author":"Julie Kagawa",
    },
    {
        "book_title":"Commonwealth",
        "author":"Ann Patchett",
    },
    {
        "book_title":"Golden Son",
        "author":"Pierce Brown",
    },
    {
        "book_title":"Uprooted",
        "author":"Naomi Novik",
    },
    {
        "book_title":"All Creatures Great and Small",
        "author":"James Herriot",
    },
    {
        "book_title":"Attack on Titan Vol 1",
        "author":"Hajime Isayama",
    },
    {
        "book_title":"Hard Eight",
        "author":"Janet Evanovich",
    },
    {
        "book_title":"Among the Hidden",
        "author":"Margaret Peterson Haddix",
    },
    {
        "book_title":"The Idiot",
        "author":"Fyodor Dostoyevsky",
    },
    {
        "book_title":"Daughter of Fortune",
        "author":"Isabel Allende",
    },
    {
        "book_title":"The Murder of Roger Ackroyd",
        "author":"Agatha Christie",
    },
    {
        "book_title":"The Statistical Probability of Love at First Sight",
        "author":"Jennifer E. Smith",
    },
    {
        "book_title":"The Infinite Sea",
        "author":"Rick Yancey",
    },
    {
        "book_title":"The Awakening",
        "author":"Kelley Armstrong",
    },
    {
        "book_title":"Handle with Care",
        "author":"Jodi Picoult",
    },
    {
        "book_title":"Dead Witch Walking",
        "author":"Kim Harrison",
    },
    {
        "book_title":"The Lost World",
        "author":"Michael Crichton",
    },
    {
        "book_title":"The Goose Girl",
        "author":"Shannon Hale",
    },
    {
        "book_title":"The Girl in the Spider’s Web",
        "author":"David Lagercrantz",
    },
    {
        "book_title":"The Reckoning",
        "author":"Kelley Armstrong",
    },
    {
        "book_title":"Gabriel’s Rapture",
        "author":"Sylvain Reynard",
    },
    {
        "book_title":"The Eyre Affair",
        "author":"Jasper Fforde",
    },
    {
        "book_title":"Colorless Tsukuru Tazaki and His Years of Pilgrimage",
        "author":"Haruki Murakami",
    },
    {
        "book_title":"Confess",
        "author":"Colleen Hoover",
    },
    {
        "book_title":"The Amulet of Samarkand",
        "author":"Jonathan Stroud",
    },
    {
        "book_title":"Winter of the World",
        "author":"Ken Follett",
    },
    {
        "book_title":"The One and Only Ivan",
        "author":"Katherine Applegate",
    },
    {
        "book_title":"The Marriage Bargain",
        "author":"Jennifer Probst",
    },
    {
        "book_title":"Dubliners",
        "author":"James Joyce",
    },
    {
        "book_title":"Under the Never Sky",
        "author":"Veronica Rossi",
    },
    {
        "book_title":"The Big Sleep",
        "author":"Raymond Chandler",
    },
    {
        "book_title":"One Thousand White Women: The Journals of Mary Dodd",
        "author":"Jim Fergus",
    },
    {
        "book_title":"The Ruins of Gorlan",
        "author":"John Flanagan",
    },
    {
        "book_title":"White Teeth",
        "author":"Zadie Smith",
    },
    {
        "book_title":"Rise of the Evening Star",
        "author":"Brandon Mull",
    },
    {
        "book_title":"The Psychopath Test",
        "author":"Jon Ronson",
    },
    {
        "book_title":"House of Leaves",
        "author":"Mark Danielewski",
    },
    {
        "book_title":"Moloka’i",
        "author":"Alan Brennert",
    },
    {
        "book_title":"Chocolat",
        "author":"Joanne Harris",
    },
    {
        "book_title":"The Complete Fairy Tales",
        "author":"Hans Christian Anderson",
    },
    {
        "book_title":"The Glass Menagerie",
        "author":"Tennessee Williams",
    },
    {
        "book_title":"A Moveable Feast",
        "author":"Ernest Hemingway",
    },
    {
        "book_title":"Moby Dick",
        "author":"Herman Melville",
    },
    {
        "book_title":"Iliad",
        "author":"Homer",
    },
    {
        "book_title":"Odyssey",
        "author":"Homer",
    },
    {
        "book_title":"Les Miserables",
        "author":"Victor Hugo",
    },
    {
        "book_title":"Adventures of Huckleberry Finn",
        "author":"Mark Twain",
    },
    {
        "book_title":"Great Expectations",
        "author":"Charles Dickens",
    },
    {
        "book_title":"A Christmas Carol",
        "author":"Charles Dickens",
    },
    {
        "book_title":"Twilight",
        "author":"Stephenie Meyers",
    },
    {
        "book_title":"New Moon",
        "author":"Stephenie Meyers",
    },
    {
        "book_title":"Eclipse",
        "author":"Stephenie Meyers",
    },
    {
        "book_title":"Breaking Dawn",
        "author":"Stephenie Meyers",
    },
    
];

const seedComments = () => Books.bulkCreate(allBooks);

module.exports = seedComments;
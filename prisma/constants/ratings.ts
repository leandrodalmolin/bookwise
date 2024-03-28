import { v4 as uuidv4 } from 'uuid'

export const ratings = [
  {
    id: uuidv4(),
    rate: 4,
    description:
      '"The Hobbit" is a timeless classic that takes readers on an unforgettable journey through Middle-earth. From the lush landscapes to the colorful characters, Tolkien\'s storytelling captivates from start to finish. Whether you\'re a fan of fantasy or simply love a good adventure, this book is a must-read for all ages.',
    book_id: '375948a7-bca3-4b59-9f97-bfcde036b4ca',
    user_id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      '"The Hitchhiker\'s Guide to the Galaxy" is a comedic masterpiece that defies all expectations. With its quirky characters and absurd plot twists, this book is an absolute delight to read. Adams\' unique blend of humor and satire keeps you hooked from page one, making it a must-have for any science fiction enthusiast.',
    book_id: '86596503-369b-4614-bacf-11c9bb73e779',
    user_id: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502',
  },
  {
    id: uuidv4(),
    rate: 5,
    description:
      "Grokking Algorithms is an absolute gem for anyone diving into the world of algorithms. Aditya Bhargava's clear explanations and relatable examples make complex concepts incredibly easy to understand. Whether you're a beginner or brushing up on your skills, this book is a game-changer. I've never felt more confident tackling algorithmic challenges after reading this book. Highly recommend!",
    book_id: 'e688c24f-d14d-4607-a12e-90e6e367398d',
    user_id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      "The End of Eternity by Isaac Asimov is a mind-bending journey through time and the human psyche. Asimov's masterful storytelling kept me glued to the pages from start to finish. The concept of manipulating time and its consequences is brilliantly explored, leaving me pondering the complexities of fate and free will. A thought-provoking read that will stay with you long after you've turned the final page. Asimov's genius shines brightly in this captivating novel.",
    book_id: '48b86ac2-014e-401d-bcbb-331ce5f4a457',
    user_id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      "Animal Farm by George Orwell is an absolute masterpiece that transcends its genre. Orwell's allegorical tale of revolution and power brilliantly mirrors the complexities of human society. From the cleverly crafted characters to the subtle political commentary, every page is packed with profound insights. Despite being a relatively short read, the impact of Animal Farm lingers long after you've finished it. A timeless classic that remains as relevant today as it was when it was first published. An essential read for anyone interested in politics, society, or simply great literature.",
    book_id: 'd0d70b05-d48f-4d83-b1e8-0b4dd984c97d',
    user_id: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502',
  },
  {
    id: uuidv4(),
    rate: 5,
    description:
      "The Hobbit by J.R.R. Tolkien is a breathtaking adventure that transports readers to a world of wonder and magic. Tolkien's vivid descriptions and captivating storytelling whisk you away on an unforgettable journey alongside Bilbo Baggins and his companions. From the lush landscapes of Middle-earth to the thrilling encounters with dragons and elves, every page is filled with excitement and intrigue. The Hobbit is a timeless classic that appeals to readers of all ages, reminding us of the enduring power of courage, friendship, and the spirit of adventure. A must-read for fantasy enthusiasts and anyone seeking an epic tale of heroism and discovery.",
    book_id: '375948a7-bca3-4b59-9f97-bfcde036b4ca',
    user_id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      "14 Habits of Highly Productive Developers is a game-changer for anyone in the software development field. As a developer myself, I found the practical advice and actionable strategies in this book to be incredibly valuable. Each habit is explained in a clear and concise manner, making it easy to implement them into my daily routine. From time management techniques to effective communication skills, this book covers all aspects of productivity in the software development industry. Whether you're a seasoned developer or just starting out, I highly recommend adding this book to your collection. It's a must-read for anyone looking to excel in their career.",
    book_id: 'c8176d86-896a-4c21-9219-6bb28cccaa5f',
    user_id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      "Clean Code by Robert C. Martin has been a revelation for me as a developer. Packed with practical advice and real-world examples, it's completely transformed my approach to coding. If you're looking to level up your skills, this book is a must-read.",
    book_id: '0440ad7d-230e-4573-b455-84ca38b5d339',
    user_id: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502',
  },
  {
    id: uuidv4(),
    rate: 5,
    description:
      "The Power of Habit by Charles Duhigg is an enlightening read that offers valuable insights into the science of habit formation. Through compelling stories and research, Duhigg explores how habits shape our lives and provides practical strategies for making positive changes. This book has helped me understand the root causes of my habits and empowered me to take control of my behavior. If you're looking to break free from negative habits and cultivate positive ones, The Power of Habit is an invaluable resource.",
    book_id: '14f410df-b28a-4e72-b1b4-363e26e160dd',
    user_id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      "Clean Architecture by Robert C. Martin offers invaluable insights into building software systems that stand the test of time. With clear guidelines and practical examples, Martin's approach revolutionizes the way developers approach architectural design. This book has transformed my understanding of software architecture, equipping me with the tools to create systems that are robust, maintainable, and adaptable. Whether you're a seasoned architect or new to the field, Clean Architecture is an essential read for anyone serious about mastering software design.",
    book_id: 'd2870ad0-3312-4ac2-af9f-76af6565587d',
    user_id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      "Extraordinary Tales by Edgar Allan Poe is an enthralling collection of some of his most haunting and mesmerizing works. Poe's mastery of the macabre shines through each tale, enveloping readers in a world of mystery and suspense. From the chilling depths of 'The Tell-Tale Heart' to the eerie atmosphere of 'The Fall of the House of Usher,' these tales are sure to leave a lasting impression. As a fan of Poe's writing, this collection did not disappoint—it's a must-read for anyone who enjoys a good scare or appreciates literary brilliance.",
    book_id: '4fd2b389-b211-40b5-9797-f78cbb985645',
    user_id: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502',
  },
  {
    id: uuidv4(),
    rate: 5,
    description:
      "Refactoring by Martin Fowler is an essential read for any developer striving to write clean, maintainable code. Fowler's expertise shines through in this comprehensive guide, offering practical strategies and real-world examples to elevate your coding skills. From identifying code smells to implementing effective refactorings, this book equips you with the tools to improve the design of your software. As someone who's constantly looking to enhance my coding practices, I found Refactoring to be an invaluable resource that's already had a positive impact on my projects. Whether you're a seasoned developer or just starting out, this book is a must-have addition to your library.",
    book_id: '6de9f6b8-5ff4-4e06-b9f4-843eca462803',
    user_id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      "Domain-Driven Design by Eric Evans is an essential resource for developers aiming to create software systems that truly meet business requirements. Evans' practical insights and real-world examples provide invaluable guidance for modeling complex domains effectively. This book has revolutionized my approach to software development, equipping me with the tools to build robust and adaptable systems. Whether you're a seasoned developer or new to the field, Domain-Driven Design is a must-read for anyone looking to excel in software architecture.",
    book_id: 'd0590f9a-dd89-42fd-9bbb-bf26c2e4dcf9',
    user_id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      "Journey to the Centre of the Earth by Jules Verne is an exhilarating adventure that transports readers to the depths of exploration and discovery. Verne's vivid descriptions and captivating storytelling whisk you away on a thrilling journey alongside Professor Otto Lidenbrock and his companions. From the breathtaking landscapes to the heart-pounding encounters with prehistoric creatures, every page is filled with excitement and wonder. As a fan of adventure novels, this timeless classic has left an indelible mark on me, reminding me of the enduring power of imagination and curiosity. A must-read for anyone seeking an epic tale of adventure and exploration.",
    book_id: '1d5cdbdc-b90f-40d5-8fe9-d4923ae12dbd',
    user_id: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502',
  },
  {
    id: uuidv4(),
    rate: 5,
    description:
      "Fragments of Horror by Junji Ito is a captivating journey into the macabre. Each story delivers spine-tingling chills and leaves you questioning the boundaries of reality. Ito's artistry and storytelling prowess create an unforgettable experience that lingers long after you've turned the last page. If you're a fan of horror manga, this collection is a must-have addition to your library.",
    book_id: '404e47f8-da53-44fd-ab53-37ed171c3a9f',
    user_id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
  },
  {
    id: uuidv4(),
    rate: 4,
    description:
      "The Pragmatic Programmer by Andy Hunt is an absolute must-read for developers. This book is like a roadmap to success in software development. It's filled with practical advice, tips, and techniques that have already made a huge difference in my work. The insights shared are not just theoretical but are backed by real-world experience, making them incredibly valuable. Whether you're a beginner or an experienced coder, The Pragmatic Programmer is your guide to becoming a more efficient and effective developer.",
    book_id: '66cb0f47-7e20-4492-b640-9c020fcae6f2',
    user_id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
  },
]

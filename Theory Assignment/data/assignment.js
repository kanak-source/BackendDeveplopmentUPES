const steps = [
    {
        id: 1,
        number: "01",
        title: "Introduction",
        shortTitle: "Introduction to JSONB",
        subtitle:
            "Understanding PostgreSQL JSONB and how PostgreSQL can combine relational SQL with document-style data",

        overview:
            "Modern applications work with both structured and semi-structured data. PostgreSQL provides JSONB to store flexible JSON documents inside relational tables, allowing developers to combine traditional SQL capabilities with document-style data handling.",

        sections: [
            {
                heading: "1.1 Introduction",

                paragraphs: [
                    `Modern applications generate and store a large amount of data in different formats. Traditionally, relational database management systems such as PostgreSQL, MySQL, and Oracle store data in a fixed structure using tables, rows, and columns. This structure is very useful when the data has a clearly defined schema.`,

                    `However, modern applications also work with data that is semi-structured or frequently changing. For example, an e-commerce application may have different specifications for different products. A laptop may have RAM, processor, storage, and screen-size information, while a mobile phone may have camera, battery, and operating-system information.`,

                    `Creating separate columns for every possible property can make the database complicated and difficult to maintain. This is where JSON becomes useful. JSON allows data to be represented in a flexible key-value structure.`,

                    `PostgreSQL provides a powerful data type called JSONB, which allows JSON documents to be stored directly inside PostgreSQL tables. JSONB provides document-style data storage and querying while PostgreSQL continues to provide relational database features such as SQL queries, relationships, constraints, transactions, and indexing.`,

                    `Therefore, this assignment explores how PostgreSQL with JSONB can be used for applications that require both SQL and NoSQL-style data handling.`
                ]
            },

            {
                heading: "1.2 Problem Statement",

                paragraphs: [
                    `Traditional relational databases require the structure of a table to be defined in advance. This works well when every record contains the same type of information.`,

                    `Consider an e-commerce application where products can have completely different specifications. A laptop may contain RAM, storage, and processor information, while a smartphone may contain camera, battery, and display information.`,

                    `If every possible property is converted into a separate database column, the table can become very large and many columns may contain NULL values. Whenever a new type of property is introduced, the database structure may also need to be changed.`,

                    `Therefore, the problem is to find a database approach that provides the reliability and structure of a relational database while also allowing flexible document-like data. PostgreSQL JSONB provides a way to address this problem.`
                ],

                bullets: [
                    "Traditional tables require predefined columns.",
                    "Different records may require different properties.",
                    "Large numbers of optional columns can result in many NULL values.",
                    "Changing the structure frequently can increase database maintenance.",
                    "Modern applications often need to store nested objects and arrays.",
                    "A flexible data format is required for semi-structured information."
                ],

                codeExamples: [
                    {
                        title: "Traditional relational product table",
                        language: "sql",
                        code: `CREATE TABLE products (
    id INT,
    name VARCHAR(100),
    brand VARCHAR(100),
    price DECIMAL,
    ram INT,
    storage INT,
    processor VARCHAR(100),
    camera VARCHAR(100),
    battery VARCHAR(100),
    screen VARCHAR(100)
);`
                    }
                ]
            },

            {
                heading: "1.3 Example of the Problem",

                paragraphs: [
                    `Consider two products: a laptop and a smartphone. Their specifications are completely different. A traditional table would need separate columns for all possible properties.`
                ],

                subsections: [
                    {
                        title: "Laptop Data",
                        code: {
                            language: "json",
                            value: `{
    "name": "Lenovo IdeaPad",
    "brand": "Lenovo",
    "ram": 16,
    "storage": 512,
    "processor": "Intel i7"
}`
                        }
                    },

                    {
                        title: "Smartphone Data",
                        code: {
                            language: "json",
                            value: `{
    "name": "Samsung Galaxy",
    "brand": "Samsung",
    "camera": "50MP",
    "battery": "5000mAh",
    "screen": "6.6 inch"
}`
                        }
                    }
                ],

                paragraphsAfter: [
                    `The two products do not have the same properties. If every property is converted into a separate column, some columns will remain empty for many records.`,

                    `JSONB allows these flexible properties to be stored together inside a JSONB column while common information such as product ID, product name, category, and price can remain as normal relational columns.`
                ]
            },

            {
                heading: "1.4 What is JSON?",

                paragraphs: [
                    `JSON stands for JavaScript Object Notation. It is a lightweight format used to represent structured and semi-structured data.`,

                    `JSON represents information using key-value pairs. It can also contain nested objects and arrays, making it suitable for representing complex application data.`
                ],

                codeExamples: [
                    {
                        title: "Simple JSON Object",
                        language: "json",
                        code: `{
    "name": "Kanak",
    "course": "B.Tech CSE",
    "semester": 4
}`
                    },

                    {
                        title: "Nested JSON Object",
                        language: "json",
                        code: `{
    "name": "Lenovo Laptop",
    "category": "Electronics",
    "specifications": {
        "ram": 16,
        "storage": 512,
        "processor": "Intel i7"
    },
    "tags": [
        "student",
        "laptop",
        "portable"
    ]
}`
                    }
                ],

                bullets: [
                    "JSON uses key-value pairs.",
                    "JSON can contain strings, numbers, Boolean values and null.",
                    "JSON can contain nested objects.",
                    "JSON can contain arrays.",
                    "JSON is widely used for APIs and web applications.",
                    "JSON is useful for representing semi-structured data."
                ]
            },

            {
                heading: "1.5 What is JSONB?",

                paragraphs: [
                    `PostgreSQL provides two JSON-related data types: JSON and JSONB. JSONB stores JSON data in a decomposed binary representation. This allows PostgreSQL to process JSON elements efficiently and provides strong support for indexing.`,

                    `JSONB is particularly useful when an application frequently searches, filters, updates, or indexes JSON data.`,

                    `Instead of storing an entire document as plain text, PostgreSQL understands the internal structure of JSONB and provides operators and functions for working with individual properties, nested objects, and arrays.`
                ],

                codeExamples: [
                    {
                        title: "Creating a table with a JSONB column",
                        language: "sql",
                        code: `CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    details JSONB
);`
                    },

                    {
                        title: "Inserting JSONB data",
                        language: "sql",
                        code: `INSERT INTO students (name, details)
VALUES (
    'Kanak',
    '{
        "course": "B.Tech CSE",
        "semester": 4,
        "skills": ["Java", "Python", "SQL"],
        "address": {
            "city": "Jaipur",
            "state": "Rajasthan"
        }
    }'
);`
                    }
                ],

                explanation: [
                    {
                        label: "Relational column",
                        value: "name"
                    },
                    {
                        label: "JSONB column",
                        value: "details"
                    },
                    {
                        label: "Nested information",
                        value: "address.city, address.state"
                    },
                    {
                        label: "Array information",
                        value: "skills"
                    }
                ]
            },

            {
                heading: "1.6 JSON vs JSONB",

                paragraphs: [
                    `PostgreSQL supports both JSON and JSONB, but they are designed for slightly different purposes. JSON stores the original JSON representation, while JSONB stores a decomposed binary representation that is designed for processing and indexing.`
                ],

                table: {
                    headers: [
                        "Feature",
                        "JSON",
                        "JSONB"
                    ],

                    rows: [
                        [
                            "Storage",
                            "Stores the original JSON text",
                            "Stores a decomposed binary representation"
                        ],
                        [
                            "Processing",
                            "Requires processing of the stored JSON text",
                            "Designed for efficient processing of JSON elements"
                        ],
                        [
                            "Indexing",
                            "More limited",
                            "Supports JSONB indexing such as GIN"
                        ],
                        [
                            "Querying",
                            "Supports JSON operators",
                            "Supports extensive JSON/JSONB operators"
                        ],
                        [
                            "Key order",
                            "Preserves original representation",
                            "Does not preserve object key order"
                        ],
                        [
                            "Duplicate keys",
                            "Original input representation can contain them",
                            "Duplicate object keys are not retained"
                        ],
                        [
                            "Common purpose",
                            "When preserving original JSON representation matters",
                            "When querying and indexing JSON data is important"
                        ]
                    ]
                }
            },

            {
                heading: "1.7 PostgreSQL as Both SQL and NoSQL-Style Database",

                paragraphs: [
                    `One of the main concepts explored in this assignment is that PostgreSQL can combine relational SQL capabilities with document-style JSONB capabilities.`,

                    `It is important to understand that PostgreSQL does not become a completely different NoSQL database simply by using JSONB. PostgreSQL remains a relational database system, but JSONB allows it to store and manipulate flexible, document-like data.`,

                    `This means that developers can keep important structured information in normal relational columns while storing flexible or changing information inside JSONB columns.`
                ],

                codeExamples: [
                    {
                        title: "Traditional relational data",
                        language: "text",
                        code: `Student
--------------------------------
id | name | course | semester
--------------------------------
1  | Kanak| CSE    | 4`
                    },

                    {
                        title: "Document-style JSONB data",
                        language: "json",
                        code: `{
    "skills": [
        "Java",
        "Python",
        "SQL"
    ],
    "projects": [
        {
            "name": "CivicSakhi",
            "technology": "React"
        }
    ],
    "preferences": {
        "theme": "dark",
        "language": "English"
    }
}`
                    }
                ],

                highlight:
                    "PostgreSQL remains a relational database, while JSONB provides flexible document-style data handling inside that relational database."
            },

            {
                heading: "1.8 Why Use JSONB in PostgreSQL?",

                paragraphs: [
                    `JSONB is useful when an application contains information that is partly structured and partly flexible.`,

                    `For example, an e-commerce system may have common information such as product ID, product name, price, and category. These values can be stored using normal relational columns.`,

                    `However, product specifications can be different for every product. These flexible specifications can be stored in a JSONB column.`
                ],

                codeExamples: [
                    {
                        title: "Recommended product table design",
                        language: "sql",
                        code: `CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    price NUMERIC,
    specifications JSONB
);`
                    },

                    {
                        title: "Laptop specifications",
                        language: "json",
                        code: `{
    "ram": "16GB",
    "storage": "512GB SSD",
    "processor": "Intel i7"
}`
                    },

                    {
                        title: "Phone specifications",
                        language: "json",
                        code: `{
    "camera": "50MP",
    "battery": "5000mAh",
    "display": "AMOLED"
}`
                    }
                ]
            },

            {
                heading: "1.9 Major Features of JSONB",

                subsections: [
                    {
                        title: "1. Flexible Structure",

                        paragraphs: [
                            `Different records can contain different JSON properties. The database does not require every JSON document to have exactly the same set of keys.`
                        ],

                        code: {
                            language: "json",
                            value: `{
    "ram": 16,
    "storage": 512
}`
                        }
                    },

                    {
                        title: "2. Nested Data",

                        paragraphs: [
                            `JSONB supports nested objects, which allows complex structures to be represented inside a single column.`
                        ],

                        code: {
                            language: "json",
                            value: `{
    "user": {
        "name": "Kanak",
        "address": {
            "city": "Jaipur",
            "state": "Rajasthan"
        }
    }
}`
                        }
                    },

                    {
                        title: "3. Arrays",

                        paragraphs: [
                            `JSONB can store arrays of values and arrays containing objects.`
                        ],

                        code: {
                            language: "json",
                            value: `{
    "skills": [
        "Java",
        "Python",
        "SQL",
        "React"
    ]
}`
                        }
                    },

                    {
                        title: "4. JSONB Querying",

                        paragraphs: [
                            `PostgreSQL provides operators for extracting values, checking whether properties exist, searching for contained JSON structures, and working with nested JSON data.`
                        ],

                        code: {
                            language: "sql",
                            value: `SELECT details->>'course'
FROM students;`
                        }
                    },

                    {
                        title: "5. JSONB Indexing",

                        paragraphs: [
                            `JSONB data can be indexed using PostgreSQL indexing mechanisms. GIN indexes are particularly useful for many types of JSONB searches.`
                        ],

                        code: {
                            language: "sql",
                            value: `CREATE INDEX idx_students_details
ON students
USING GIN (details);`
                        }
                    },

                    {
                        title: "6. Relational Database Features",

                        paragraphs: [
                            `Using JSONB does not remove PostgreSQL's relational capabilities. The same database can still use primary keys, foreign keys, constraints, joins, transactions, aggregation, views, and traditional indexes.`
                        ]
                    }
                ]
            },

            {
                heading: "1.10 Basic Architecture of the Proposed System",

                paragraphs: [
                    `The proposed implementation uses Express.js as the backend application layer and PostgreSQL as the database layer. PostgreSQL stores both traditional relational information and flexible JSONB information.`
                ],

                architecture: [
                    "USER / CLIENT",
                    "Express.js API",
                    "PostgreSQL Database",
                    "Relational Data + JSONB Data"
                ],

                codeExamples: [
                    {
                        title: "Architecture Representation",
                        language: "text",
                        code: `                USER / CLIENT
                     |
                     ↓
              Express.js API
                     |
                     ↓
             PostgreSQL Database
                     |
          -------------------------
          |                       |
    Relational Data          JSONB Data
          |                       |
     id, name, price       specifications
     category, date       attributes, tags`
                    }
                ],

                paragraphsAfter: [
                    `For example, when a client sends product information, Express.js receives the request and sends the data to PostgreSQL. PostgreSQL stores common product information in normal columns and flexible specifications inside the JSONB column.`,

                    `This architecture allows the application to maintain a structured database while still supporting flexible information.`
                ]
            },

            {
                heading: "1.11 JSONB vs Traditional Table Design",

                paragraphs: [
                    `A traditional design may create a separate column for every possible product property. This can become difficult when different types of products have different attributes.`
                ],

                codeExamples: [
                    {
                        title: "Traditional design",
                        language: "sql",
                        code: `CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    ram INT,
    storage INT,
    camera TEXT,
    battery TEXT,
    processor TEXT,
    display TEXT
);`
                    },

                    {
                        title: "JSONB-based design",
                        language: "sql",
                        code: `CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    category TEXT,
    price NUMERIC,
    specifications JSONB
);`
                    }
                ],

                comparison: [
                    {
                        traditional: "Separate columns",
                        jsonb: "Flexible JSONB column"
                    },
                    {
                        traditional: "Schema changes may be required for new properties",
                        jsonb: "New JSON properties can be added within documents"
                    },
                    {
                        traditional: "Many optional properties can create NULL values",
                        jsonb: "Flexible properties can remain inside JSON documents"
                    },
                    {
                        traditional: "Best for strongly structured information",
                        jsonb: "Useful for semi-structured information"
                    }
                ]
            },

            {
                heading: "1.12 JSONB and MongoDB",

                paragraphs: [
                    `MongoDB is a document-oriented NoSQL database where information is stored as documents. PostgreSQL JSONB can represent similar document-like structures inside a relational database.`,

                    `For example, a MongoDB-style product document can contain product information and nested specifications. PostgreSQL can represent similar information using normal columns combined with a JSONB column.`,

                    `However, PostgreSQL and MongoDB are not identical technologies. PostgreSQL remains a relational database system, while MongoDB is designed around a document-oriented database model.`,

                    `The purpose of this assignment is therefore not to claim that PostgreSQL JSONB and MongoDB are exactly the same. Instead, the assignment investigates how far PostgreSQL JSONB can provide document-oriented functionality while retaining the relational capabilities of PostgreSQL.`
                ],

                codeExamples: [
                    {
                        title: "Document-style product data",
                        language: "json",
                        code: `{
    "name": "Lenovo Laptop",
    "category": "Electronics",
    "specifications": {
        "ram": 16,
        "storage": 512,
        "processor": "Intel i7"
    }
}`
                    },

                    {
                        title: "PostgreSQL representation",
                        language: "text",
                        code: `products
------------------------------------------------
id | name | category | specifications (JSONB)
------------------------------------------------
1  | Lenovo Laptop | Electronics | {...}`
                    }
                ]
            },

            {
                heading: "1.13 Objectives of the Assignment",

                paragraphs: [
                    `The main objective of this assignment is to understand and demonstrate how PostgreSQL JSONB can be used to handle flexible JSON-based data while retaining the advantages of a relational database.`
                ],

                numberedList: [
                    "To understand the concept of JSON and JSONB.",
                    "To understand the difference between JSON and JSONB.",
                    "To understand how JSONB can be stored inside PostgreSQL tables.",
                    "To create a PostgreSQL table containing a JSONB column.",
                    "To insert structured and semi-structured data into JSONB.",
                    "To retrieve specific values from JSONB documents.",
                    "To perform searches using JSONB operators.",
                    "To update and delete JSONB properties.",
                    "To understand JSONB indexing using GIN.",
                    "To connect PostgreSQL JSONB with an Express.js backend.",
                    "To compare PostgreSQL JSONB with a document-oriented database such as MongoDB.",
                    "To understand situations where PostgreSQL JSONB can be used instead of maintaining a separate MongoDB database."
                ]
            },

            {
                heading: "1.14 Scope of the Assignment",

                paragraphs: [
                    `This assignment focuses on the practical use of PostgreSQL JSONB. The implementation will gradually move from database setup to JSONB storage, querying, updating, indexing, backend integration, and comparison with MongoDB.`
                ],

                workflow: [
                    "PostgreSQL Setup",
                    "Database Creation",
                    "Table Creation",
                    "JSONB Column",
                    "Insert JSON Documents",
                    "Read JSONB Data",
                    "Search JSONB Data",
                    "Update JSONB Data",
                    "Delete JSONB Data",
                    "Index JSONB Data",
                    "Express.js Integration",
                    "MongoDB Comparison"
                ]
            },

            {
                heading: "1.15 Expected Outcome",

                paragraphs: [
                    `After completing the implementation, the system should demonstrate that PostgreSQL can store normal relational data together with JSON documents inside JSONB columns.`,

                    `The implementation should also demonstrate that JSONB data can be queried, searched, updated, deleted, and indexed using PostgreSQL features.`,

                    `The final implementation will show how a single PostgreSQL database can support both structured relational information and flexible JSON-based information.`
                ],

                bullets: [
                    "Store normal relational data.",
                    "Store JSON documents inside a JSONB column.",
                    "Store nested objects and arrays.",
                    "Extract values from JSONB.",
                    "Search JSONB documents.",
                    "Update individual JSON properties.",
                    "Remove JSON properties.",
                    "Create indexes for JSONB data.",
                    "Expose JSONB data through an Express.js backend.",
                    "Compare PostgreSQL JSONB with MongoDB."
                ]
            },

            {
                heading: "1.16 Step 1 Summary",

                paragraphs: [
                    `In this step, we established the basic concept behind PostgreSQL JSONB and why it is useful for modern applications.`,

                    `Traditional PostgreSQL primarily represents structured information using tables, rows, and columns. JSONB extends PostgreSQL by allowing flexible JSON documents to be stored and queried inside those tables.`,

                    `The major idea of this assignment is that PostgreSQL can combine structured relational information with flexible document-style information without requiring a separate database for every type of data.`
                ],

                codeExamples: [
                    {
                        title: "Core Concept",
                        language: "text",
                        code: `Traditional PostgreSQL
        |
        ↓
Tables + Rows + Columns
        |
        +
        |
        ↓
PostgreSQL + JSONB
        |
        ↓
Tables + Relational Data
        +
Flexible JSON Documents
        +
Nested Objects
        +
Arrays
        +
JSON Queries
        +
JSONB Indexing`
                    }
                ],

                highlight:
                    "PostgreSQL remains a relational database, while JSONB provides flexible document-style data handling inside that relational database."
            }
        ],

        keyPoints: [
            "JSON is a format for representing structured and semi-structured data.",
            "JSONB is PostgreSQL's binary/decomposed JSON data type.",
            "JSONB supports nested objects and arrays.",
            "JSONB provides operators for querying JSON data.",
            "JSONB can be indexed using mechanisms such as GIN.",
            "PostgreSQL can combine relational columns with JSONB columns.",
            "PostgreSQL JSONB provides document-style capabilities but PostgreSQL remains a relational database.",
            "JSONB can be useful when data is partly structured and partly flexible.",
            "PostgreSQL JSONB and MongoDB are not identical, but they can support some overlapping document-data use cases."
        ],

        takeaway: {
            title: "Key Takeaway",
            text: "PostgreSQL JSONB provides a bridge between traditional relational database design and flexible document-style data. It allows developers to keep structured information in normal SQL columns while storing changing or semi-structured information inside JSONB."
        },

        nextStep: {
            title: "Next: Step 2 — Setup",
            description:
                "In the next step, we will set up PostgreSQL, create the database, connect it with the Express.js backend, and understand the complete project structure required for the implementation."
        },

        references: [
            {
                title: "PostgreSQL JSON Types",
                url: "https://www.postgresql.org/docs/current/datatype-json.html"
            },
            {
                title: "PostgreSQL JSON Functions and Operators",
                url: "https://www.postgresql.org/docs/current/functions-json.html"
            },
            {
                title: "PostgreSQL GIN Indexes",
                url: "https://www.postgresql.org/docs/current/gin.html"
            }
        ]
    },

    {
        id: 2,
        number: "02",
        title: "Setup",
        shortTitle: "PostgreSQL + Node.js Setup",
        subtitle:
            "Setting up PostgreSQL, Node.js, Express.js and the database connection required for the JSONB implementation",

        overview:
            "Before working with JSONB, the development environment needs to be prepared. This step sets up PostgreSQL as the database, Node.js and Express.js as the backend environment, and the pg package as the bridge between the application and PostgreSQL.",

        sections: [

            {
                heading: "2.1 Setup Overview",

                paragraphs: [
                    `The implementation requires a database, a backend server, and a connection between the two. PostgreSQL will be responsible for storing and querying the JSONB data, while Node.js and Express.js will provide the backend application layer.`,

                    `The project uses EJS for rendering the assignment interface and PostgreSQL for the actual database implementation. The pg package will be used by Node.js to communicate with PostgreSQL.`,

                    `The complete setup therefore consists of three major layers: the frontend presentation layer, the backend application layer, and the PostgreSQL database layer.`
                ],

                architecture: [
                    "EJS — Presentation Layer",
                    "Express.js — Backend / Routing Layer",
                    "Node.js — Runtime Environment",
                    "pg — PostgreSQL Connection Layer",
                    "PostgreSQL — Database Layer",
                    "JSONB — Flexible Data Storage"
                ]
            },


            {
                heading: "2.2 Technologies Used",

                paragraphs: [
                    `The following technologies are used in this project. Each technology has a specific role in the implementation.`
                ],

                table: {
                    headers: [
                        "Technology",
                        "Purpose"
                    ],

                    rows: [
                        [
                            "PostgreSQL",
                            "Relational database used to store structured and JSONB data"
                        ],
                        [
                            "JSONB",
                            "Stores flexible JSON documents inside PostgreSQL"
                        ],
                        [
                            "Node.js",
                            "JavaScript runtime used to execute the backend"
                        ],
                        [
                            "Express.js",
                            "Backend framework used to create routes and APIs"
                        ],
                        [
                            "EJS",
                            "Template engine used to generate the assignment interface"
                        ],
                        [
                            "pg",
                            "Node.js PostgreSQL client used to connect the backend with PostgreSQL"
                        ],
                        [
                            "JavaScript",
                            "Programming language used for backend logic"
                        ],
                        [
                            "HTML / CSS",
                            "Used to create and style the frontend interface"
                        ]
                    ]
                }
            },


            {
                heading: "2.3 PostgreSQL Setup",

                paragraphs: [
                    `The first requirement is PostgreSQL. PostgreSQL acts as the main database in this project. The database will contain a table with a JSONB column where flexible document-like information will be stored.`,

                    `If PostgreSQL is already installed on the system, the installation step can be skipped. The important requirement is that the PostgreSQL server is running and accessible from the application.`
                ],

                codeExamples: [
                    {
                        title: "Check PostgreSQL installation",
                        language: "bash",
                        code: `psql --version`
                    },

                    {
                        title: "Open PostgreSQL",
                        language: "bash",
                        code: `psql postgres`
                    }
                ],

                bullets: [
                    "PostgreSQL must be installed.",
                    "The PostgreSQL server must be running.",
                    "A PostgreSQL user must be available.",
                    "The Node.js application must be able to connect to PostgreSQL."
                ]
            },


            {
                heading: "2.4 Creating the Database",

                paragraphs: [
                    `After PostgreSQL is available, a separate database can be created for the JSONB assignment. A database provides the environment in which the tables, indexes, and other database objects will be created.`,

                    `For this project, a database named jsonb_assignment can be used.`
                ],

                codeExamples: [
                    {
                        title: "Create the database",
                        language: "sql",
                        code: `CREATE DATABASE jsonb_assignment;`
                    },

                    {
                        title: "Connect to the database",
                        language: "sql",
                        code: `\\c jsonb_assignment`
                    }
                ],

                paragraphsAfter: [
                    `The \\c command connects the current PostgreSQL session to the selected database. All tables created after this point will belong to the jsonb_assignment database.`
                ]
            },


            {
                heading: "2.5 Creating the Node.js Project",

                paragraphs: [
                    `The backend application is created using Node.js. Node.js allows JavaScript code to run outside the browser and is commonly used for backend development.`,

                    `Express.js is used on top of Node.js to create the web server and handle HTTP requests.`
                ],

                codeExamples: [
                    {
                        title: "Create project folder",
                        language: "bash",
                        code: `mkdir postgres-jsonb-assignment
cd postgres-jsonb-assignment`
                    },

                    {
                        title: "Initialize Node.js project",
                        language: "bash",
                        code: `npm init -y`
                    }
                ]
            },


            {
                heading: "2.6 Installing Dependencies",

                paragraphs: [
                    `The project requires Express.js for the backend server, EJS for server-side page rendering, pg for PostgreSQL connectivity, and dotenv for storing database configuration in environment variables.`,

                    `These packages are installed using npm, the Node.js package manager.`
                ],

                codeExamples: [
                    {
                        title: "Install project dependencies",
                        language: "bash",
                        code: `npm install express ejs pg dotenv`
                    }
                ],

                table: {
                    headers: [
                        "Package",
                        "Role"
                    ],

                    rows: [
                        [
                            "express",
                            "Creates the backend server and API routes"
                        ],
                        [
                            "ejs",
                            "Renders dynamic HTML pages"
                        ],
                        [
                            "pg",
                            "Connects Node.js with PostgreSQL"
                        ],
                        [
                            "dotenv",
                            "Loads database configuration from environment variables"
                        ]
                    ]
                }
            },


            {
                heading: "2.7 Project Folder Structure",

                paragraphs: [
                    `A clear project structure makes the application easier to understand and maintain. The frontend, backend, database connection, and assignment data are separated into different folders.`
                ],

                codeExamples: [
                    {
                        title: "Project Structure",
                        language: "text",
                        code: `postgres-jsonb-assignment/
│
├── data/
│   └── assignment.js
│
├── db/
│   └── database.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   │
│   └── index.ejs
│
├── .env
├── package.json
├── package-lock.json
└── server.js`
                    }
                ],

                paragraphsAfter: [
                    `The data folder contains the assignment content. The db folder contains the PostgreSQL connection configuration. The public folder contains CSS and browser-side JavaScript. The views folder contains EJS templates. The server.js file acts as the main backend entry point.`
                ]
            },


            {
                heading: "2.8 Connecting Node.js with PostgreSQL",

                paragraphs: [
                    `The Node.js backend needs a database connection before it can execute SQL queries. The pg package provides the PostgreSQL client required for this connection.`,

                    `A connection pool is commonly used because it allows the application to manage multiple database connections efficiently rather than creating a completely new connection for every request.`
                ],

                codeExamples: [
                    {
                        title: "db/database.js",
                        language: "javascript",
                        code: `const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

module.exports = pool;`
                    }
                ],

                paragraphsAfter: [
                    `The Pool object is exported from database.js so that other backend files can import it and execute SQL queries.`
                ]
            },


            {
                heading: "2.9 Environment Variables",

                paragraphs: [
                    `Database credentials should not be directly written inside the application source code. Instead, environment variables can be used to store sensitive configuration such as the database username, password, host, port, and database name.`,

                    `The dotenv package loads these values from a .env file into the Node.js process environment.`
                ],

                codeExamples: [
                    {
                        title: ".env",
                        language: "text",
                        code: `DATABASE_URL=postgresql://username:password@localhost:5432/jsonb_assignment`
                    },

                    {
                        title: "Load environment variables",
                        language: "javascript",
                        code: `require("dotenv").config();`
                    }
                ],

                highlight:
                    "Database credentials should be kept outside the source code and should not be committed to a public GitHub repository."
            },


            {
                heading: "2.10 Testing the Database Connection",

                paragraphs: [
                    `Before creating the JSONB table, the application should verify that the backend can successfully communicate with PostgreSQL.`,

                    `A simple test query such as SELECT NOW() can be executed. If the query returns a timestamp, it confirms that the Node.js application has successfully connected to PostgreSQL.`
                ],

                codeExamples: [
                    {
                        title: "Test database connection",
                        language: "javascript",
                        code: `const pool = require("./db/database");

async function testConnection() {
    try {
        const result = await pool.query("SELECT NOW()");

        console.log(
            "Database connected:",
            result.rows[0]
        );
    } catch (error) {
        console.error(
            "Database connection failed:",
            error.message
        );
    }
}

testConnection();`
                    }
                ]
            },


            {
                heading: "2.11 Backend Request Flow",

                paragraphs: [
                    `Once the database connection is established, the application follows a simple request-response flow. The client sends a request to the Express.js server. Express handles the route and the backend executes a SQL query using the PostgreSQL connection pool.`,

                    `The PostgreSQL database processes the query and returns the result. Express then sends the result back to the client. When JSONB is involved, the JSON document is stored or retrieved through the JSONB column.`
                ],

                codeExamples: [
                    {
                        title: "Request Flow",
                        language: "text",
                        code: `Client
   |
   | HTTP Request
   ↓
Express.js
   |
   | SQL Query
   ↓
pg Connection Pool
   |
   | PostgreSQL Query
   ↓
PostgreSQL
   |
   | JSONB / SQL Result
   ↓
Express.js
   |
   | HTTP Response
   ↓
Client`
                    }
                ]
            },


            {
                heading: "2.12 Complete Setup Architecture",

                paragraphs: [
                    `At the end of the setup stage, all major components are connected. The frontend provides the interface, Express.js handles requests, Node.js executes the backend code, pg provides database connectivity, and PostgreSQL stores the actual data.`
                ],

                architecture: [
                    "User Interface",
                    "EJS + HTML + CSS",
                    "Express.js Server",
                    "Node.js Runtime",
                    "pg PostgreSQL Client",
                    "PostgreSQL Database",
                    "JSONB Data"
                ],

                codeExamples: [
                    {
                        title: "Complete System Flow",
                        language: "text",
                        code: `                 USER
                   |
                   ↓
          ┌─────────────────┐
          │   EJS / HTML    │
          │      CSS        │
          └────────┬────────┘
                   |
                   ↓
          ┌─────────────────┐
          │   Express.js    │
          │     Server      │
          └────────┬────────┘
                   |
                   ↓
          ┌─────────────────┐
          │       pg        │
          │ PostgreSQL      │
          │    Client       │
          └────────┬────────┘
                   |
                   ↓
          ┌─────────────────┐
          │   PostgreSQL    │
          │                 │
          │ SQL + JSONB     │
          └─────────────────┘`
                    }
                ]
            },


            {
                heading: "2.13 Why This Setup is Required",

                paragraphs: [
                    `The setup is important because JSONB functionality will not exist only at the frontend level. The actual JSONB data type, JSONB operators, queries, indexes, and database operations are handled by PostgreSQL.`,

                    `Express.js provides the application layer through which the frontend can communicate with the database. This makes the project a complete backend implementation rather than only a collection of SQL commands.`,

                    `The setup also separates responsibilities. PostgreSQL handles data storage and querying, Express.js handles HTTP requests and application logic, and EJS handles presentation.`
                ],

                bullets: [
                    "PostgreSQL handles persistent data storage.",
                    "JSONB handles flexible document-style information.",
                    "Node.js provides the runtime for backend JavaScript.",
                    "Express.js handles routes and HTTP requests.",
                    "pg connects the backend to PostgreSQL.",
                    "EJS renders the frontend pages.",
                    "Environment variables keep database configuration separate from source code."
                ]
            },


            {
                heading: "2.14 Step 2 Summary",

                paragraphs: [
                    `In this step, the complete development environment required for the JSONB implementation was established.`,

                    `PostgreSQL was selected as the database, Node.js and Express.js were selected for the backend, EJS was used for the presentation layer, and the pg package was introduced as the connection between the backend and PostgreSQL.`,

                    `The next stage is to create the actual PostgreSQL table containing the JSONB column. This table will become the foundation for storing flexible JSON documents and demonstrating PostgreSQL's SQL and document-style capabilities.`
                ],

                codeExamples: [
                    {
                        title: "Setup Complete",
                        language: "text",
                        code: `Frontend
   ↓
EJS + HTML + CSS
   ↓
Express.js
   ↓
Node.js
   ↓
pg
   ↓
PostgreSQL
   ↓
JSONB`
                    }
                ]
            }

        ],

        keyPoints: [
            "PostgreSQL is the main database used in the implementation.",
            "Node.js provides the backend runtime.",
            "Express.js handles HTTP requests and application routes.",
            "EJS is used to generate the assignment interface.",
            "The pg package connects Node.js with PostgreSQL.",
            "A connection pool can manage PostgreSQL connections efficiently.",
            "Environment variables should be used for database configuration.",
            "The application follows a client → Express → pg → PostgreSQL request flow.",
            "The next step is to create the PostgreSQL table containing a JSONB column."
        ],

        takeaway: {
            title: "Key Takeaway",
            text:
                "The setup creates the complete environment required to demonstrate JSONB in a real backend application. PostgreSQL will manage the database and JSONB data, while Node.js and Express.js will provide the application layer that communicates with it."
        },

        nextStep: {
            title: "Next: Step 3 — Create Table",
            description:
                "In the next step, we will create the PostgreSQL table, define normal relational columns, add a JSONB column, and understand exactly how structured and flexible data can exist together."
        },

        references: [
            {
                title: "PostgreSQL Documentation",
                url: "https://www.postgresql.org/docs/current/"
            },
            {
                title: "Node.js Documentation",
                url: "https://nodejs.org/docs/latest/api/"
            },
            {
                title: "Express.js Documentation",
                url: "https://expressjs.com/"
            },
            {
                title: "node-postgres Documentation",
                url: "https://node-postgres.com/"
            }
        ]
    },

    {
        id: 3,
        number: "03",
        title: "Create Table",
        shortTitle: "Designing the JSONB Table",
        subtitle:
            "Creating a PostgreSQL table that combines traditional relational columns with flexible JSONB data",

        overview:
            "In this step, the actual database structure is created. The main objective is to understand how PostgreSQL can store normal structured columns together with a JSONB column. This is the core idea behind using PostgreSQL for both relational and document-style data.",

        sections: [

            {
                heading: "3.1 Introduction to the Table Design",

                paragraphs: [
                    `After completing the PostgreSQL and Node.js setup, the next step is to create a table that can store the data used in our application.`,

                    `A traditional relational database normally stores information in predefined columns such as id, name, category and price. However, real applications often contain additional information that may differ from one record to another.`,

                    `For example, two products may have completely different specifications. A laptop may contain RAM, storage and processor information, while a mobile phone may contain screen size, battery capacity and camera information.`,

                    `Creating a separate database column for every possible property can make the table unnecessarily large and difficult to maintain. JSONB provides a flexible way to store these variable properties inside one column.`,

                    `Therefore, our table will contain both fixed relational information and flexible JSONB information.`
                ],

                highlight:
                    "The important idea is not to replace every relational column with JSONB. Instead, PostgreSQL allows structured columns and flexible JSONB data to exist together in the same table."
            },


            {
                heading: "3.2 Designing the Products Table",

                paragraphs: [
                    `For this implementation, a products table will be used as the main example. The table contains a unique identifier, product name, category, price and a JSONB column called metadata.`,

                    `The fixed columns represent information that is common and important for every product. The metadata column contains additional properties that can vary depending on the product.`
                ],

                table: {
                    headers: [
                        "Column",
                        "Data Type",
                        "Purpose"
                    ],

                    rows: [
                        [
                            "id",
                            "BIGSERIAL",
                            "Unique identifier for every product"
                        ],
                        [
                            "name",
                            "TEXT",
                            "Stores the product name"
                        ],
                        [
                            "category",
                            "TEXT",
                            "Stores the main product category"
                        ],
                        [
                            "price",
                            "NUMERIC",
                            "Stores the product price"
                        ],
                        [
                            "metadata",
                            "JSONB",
                            "Stores flexible product-specific information"
                        ],
                        [
                            "created_at",
                            "TIMESTAMPTZ",
                            "Stores the record creation time"
                        ]
                    ]
                }
            },


            {
                heading: "3.3 Creating the Products Table",

                paragraphs: [
                    `The following SQL statement creates the products table. The metadata column uses the JSONB data type provided by PostgreSQL.`,

                    `The metadata column is given a default value of an empty JSON object. This means that if no metadata is supplied while inserting a record, PostgreSQL can store an empty JSON object instead of a NULL value.`
                ],

                codeExamples: [
                    {
                        title: "Create products table",
                        language: "sql",
                        code: `CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price NUMERIC(10, 2),
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);`
                    }
                ],

                paragraphsAfter: [
                    `The PRIMARY KEY constraint ensures that every product has a unique id. The NOT NULL constraint on name and category ensures that these important fields cannot be left empty.`,

                    `The metadata column is explicitly defined as JSONB. The expression '{}'::jsonb converts an empty JSON object into PostgreSQL's JSONB data type.`,

                    `The created_at column automatically stores the time at which the row is created.`
                ]
            },


            {
                heading: "3.4 Understanding Each Column",

                paragraphs: [
                    `Each column has a specific responsibility. Separating fixed information from flexible information helps maintain a clear database design.`
                ],

                subsections: [

                    {
                        title: "id — Primary Key",

                        paragraphs: [
                            `The id column uniquely identifies each product. BIGSERIAL allows PostgreSQL to automatically generate increasing numeric identifiers for new records.`,

                            `For example, the first product may receive id 1, the second product may receive id 2, and so on.`
                        ]
                    },

                    {
                        title: "name — Product Name",

                        paragraphs: [
                            `The name column stores the main name of the product. Because every product is expected to have a name, the column is marked NOT NULL.`
                        ]
                    },

                    {
                        title: "category — Product Category",

                        paragraphs: [
                            `The category column stores the general classification of the product, such as Electronics, Furniture or Appliances.`,

                            `This is stored as a normal relational column because category is a common attribute that can be used frequently for filtering and organizing records.`
                        ]
                    },

                    {
                        title: "price — Product Price",

                        paragraphs: [
                            `The price column uses NUMERIC instead of a floating-point type because prices are numerical values where predictable decimal precision is useful.`
                        ]
                    },

                    {
                        title: "metadata — JSONB Data",

                        paragraphs: [
                            `The metadata column is the most important column for this assignment. It stores JSON documents in PostgreSQL's JSONB format.`,

                            `Different products can have different metadata structures without requiring additional database columns for every possible property.`
                        ]
                    },

                    {
                        title: "created_at — Creation Timestamp",

                        paragraphs: [
                            `The created_at column records when the row was created. The DEFAULT NOW() expression automatically generates the current timestamp when a new product is inserted.`
                        ]
                    }

                ]
            },


            {
                heading: "3.5 Understanding JSONB Inside the Table",

                paragraphs: [
                    `The metadata column can contain a complete JSON object. PostgreSQL stores this object as JSONB rather than treating it as ordinary text.`,

                    `For example, a laptop may have the following metadata.`
                ],

                codeExamples: [
                    {
                        title: "Laptop metadata",
                        language: "json",
                        code: `{
    "brand": "Lenovo",
    "ram": 16,
    "storage": {
        "type": "SSD",
        "capacity": 512
    },
    "processor": "Intel Core i7",
    "tags": [
        "student",
        "programming",
        "portable"
    ]
}`
                    }
                ],

                paragraphsAfter: [
                    `The JSON object contains simple values such as brand and ram, a nested object called storage, a processor value and an array called tags.`,

                    `This demonstrates why JSONB is useful for semi-structured data. All of these properties can be stored inside the metadata column without creating separate relational columns for every property.`
                ]
            },


            {
                heading: "3.6 Structured Data + Flexible Data",

                paragraphs: [
                    `The products table demonstrates one of the major strengths of PostgreSQL JSONB. Structured information and flexible information can be stored together.`,

                    `The name, category and price columns follow a predefined relational structure. The metadata column provides flexibility for information that may vary between products.`
                ],

                comparison: [
                    {
                        traditional:
                            "Every product-specific property requires a separate database column.",

                        jsonb:
                            "Variable product properties can be stored inside the metadata JSONB column."
                    },

                    {
                        traditional:
                            "Changing the table structure may be required when new properties are introduced.",

                        jsonb:
                            "New JSON properties can be added without adding a new relational column."
                    },

                    {
                        traditional:
                            "Nested information may require additional tables or columns.",

                        jsonb:
                            "Nested objects can be represented directly inside the JSONB document."
                    }
                ]
            },


            {
                heading: "3.7 Creating the Table in PostgreSQL",

                paragraphs: [
                    `The table can be created directly from the PostgreSQL terminal using the CREATE TABLE command.`,

                    `First, connect to the assignment database.`
                ],

                codeExamples: [
                    {
                        title: "Connect to database",
                        language: "sql",
                        code: `\\c jsonb_assignment`
                    },

                    {
                        title: "Create the table",
                        language: "sql",
                        code: `CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price NUMERIC(10, 2),
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);`
                    }
                ]
            },


            {
                heading: "3.8 Checking the Table Structure",

                paragraphs: [
                    `After creating the table, its structure can be checked using PostgreSQL's \\d command.`,

                    `This helps verify that the columns were created with the expected data types.`
                ],

                codeExamples: [
                    {
                        title: "View table structure",
                        language: "sql",
                        code: `\\d products`
                    }
                ],

                paragraphsAfter: [
                    `The output should show the id, name, category, price, metadata and created_at columns. The metadata column should be displayed with the JSONB data type.`
                ]
            },


            {
                heading: "3.9 Verifying the JSONB Column",

                paragraphs: [
                    `The metadata column is the key part of the implementation, so it is important to confirm that PostgreSQL recognizes it as JSONB.`,

                    `The following query can be used to inspect the column information through PostgreSQL's information_schema.`
                ],

                codeExamples: [
                    {
                        title: "Check metadata data type",
                        language: "sql",
                        code: `SELECT
    column_name,
    data_type
FROM information_schema.columns
WHERE table_name = 'products';`
                    }
                ],

                paragraphsAfter: [
                    `The metadata column should appear with the PostgreSQL data type jsonb. This confirms that the table has been correctly configured for JSONB storage.`
                ]
            },


            {
                heading: "3.10 Adding a JSONB Column to an Existing Table",

                paragraphs: [
                    `JSONB does not have to be planned only when creating a new table. PostgreSQL also allows a JSONB column to be added to an existing table.`,

                    `For example, if a products table already exists without metadata, the following ALTER TABLE statement can add the JSONB column.`
                ],

                codeExamples: [
                    {
                        title: "Add JSONB column",
                        language: "sql",
                        code: `ALTER TABLE products
ADD COLUMN metadata JSONB
NOT NULL DEFAULT '{}'::jsonb;`
                    }
                ],

                paragraphsAfter: [
                    `This makes JSONB useful even when an existing relational application needs to introduce flexible data without redesigning the complete database.`
                ]
            },


            {
                heading: "3.11 JSONB and Database Constraints",

                paragraphs: [
                    `The table still behaves like a normal PostgreSQL relational table even though it contains JSONB data. This means relational features such as primary keys, NOT NULL constraints and relationships can still be used.`,

                    `This is an important distinction. Adding JSONB to PostgreSQL does not remove the relational capabilities of PostgreSQL. Instead, JSONB adds another way of representing flexible data within the relational database.`
                ],

                bullets: [
                    "Primary keys can still identify records.",
                    "NOT NULL constraints can still be applied.",
                    "Relational columns can still be indexed.",
                    "Tables can still be connected using foreign keys.",
                    "SQL queries can still be used to retrieve and modify records.",
                    "JSONB provides additional flexibility for semi-structured information."
                ]
            },


            {
                heading: "3.12 Example of Two Different Products",

                paragraphs: [
                    `The following example demonstrates why the metadata column is useful. Both products use the same relational table, but their JSONB metadata can contain different properties.`
                ],

                codeExamples: [
                    {
                        title: "Laptop metadata",
                        language: "json",
                        code: `{
    "brand": "Lenovo",
    "ram": 16,
    "storage": {
        "type": "SSD",
        "capacity": 512
    },
    "processor": "Intel Core i7"
}`
                    },

                    {
                        title: "Smartphone metadata",
                        language: "json",
                        code: `{
    "brand": "Samsung",
    "screen": {
        "size": 6.7,
        "type": "AMOLED"
    },
    "battery": 5000,
    "camera": {
        "main": 50,
        "front": 12
    }
}`
                    }
                ],

                paragraphsAfter: [
                    `Both records can exist in the same products table even though the internal structure of their metadata is different. This is one of the main document-style characteristics provided by JSONB.`
                ]
            },


            {
                heading: "3.13 Why Not Store Everything as JSONB?",

                paragraphs: [
                    `Although JSONB provides flexibility, it does not mean that every piece of information should be stored inside JSONB.`,

                    `Important and frequently queried fields can remain as normal relational columns. This provides clear structure and makes common queries easier to understand.`,

                    `JSONB can then be used for additional properties that are variable, optional, nested or different between records.`,

                    `This hybrid approach allows the application to use the strengths of both relational and document-style data storage.`
                ],

                highlight:
                    "A practical PostgreSQL design often uses relational columns for core business data and JSONB for flexible or evolving attributes."
            },


            {
                heading: "3.14 Final Table Design",

                paragraphs: [
                    `The final table therefore combines the predictable structure of relational databases with the flexibility of JSON documents.`
                ],

                codeExamples: [
                    {
                        title: "Final products table",
                        language: "text",
                        code: `products
│
├── id             → BIGSERIAL
├── name           → TEXT
├── category       → TEXT
├── price          → NUMERIC
├── metadata       → JSONB
│      │
│      ├── brand
│      ├── ram
│      ├── storage
│      ├── processor
│      └── tags
│
└── created_at     → TIMESTAMPTZ`
                    }
                ],

                paragraphsAfter: [
                    `The metadata column is intentionally flexible, while the other columns provide the stable structure required by the application.`
                ]
            },


            {
                heading: "3.15 Step 3 Summary",

                paragraphs: [
                    `In this step, the products table was designed and created using PostgreSQL. The table contains traditional relational columns as well as a JSONB metadata column.`,

                    `The implementation demonstrates that PostgreSQL does not require a choice between structured relational data and flexible document-style data. Both approaches can exist in the same database.`,

                    `The JSONB column can contain nested objects, arrays and different properties for different records. At the same time, PostgreSQL continues to provide relational features such as primary keys, constraints and SQL queries.`,

                    `The next step is to insert real JSON documents into the metadata column and observe how different types of JSON data can be stored inside the same PostgreSQL table.`
                ],

                codeExamples: [
                    {
                        title: "Table creation completed",
                        language: "sql",
                        code: `CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price NUMERIC(10, 2),
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);`
                    }
                ]
            }

        ],

        keyPoints: [
            "The products table combines relational columns with a JSONB column.",
            "The metadata column stores flexible JSON documents.",
            "JSONB supports nested objects and arrays.",
            "Different products can have different metadata structures.",
            "Core fields such as name and category can remain normal relational columns.",
            "JSONB can be added to an existing PostgreSQL table using ALTER TABLE.",
            "PostgreSQL continues to provide relational features even when JSONB is used.",
            "The hybrid model combines structured data with flexible document-style data."
        ],

        takeaway: {
            title: "Key Takeaway",
            text:
                "The table design demonstrates the central idea of this assignment: PostgreSQL can store normal relational data and flexible JSON documents together. JSONB provides document-style flexibility without removing PostgreSQL's relational database capabilities."
        },

        nextStep: {
            title: "Next: Step 4 — Insert Data",
            description:
                "In the next step, real product records will be inserted into PostgreSQL. The examples will include simple values, nested JSON objects and arrays to demonstrate how JSONB stores different types of document data."
        },

        references: [
            {
                title: "PostgreSQL JSON Types Documentation",
                url: "https://www.postgresql.org/docs/current/datatype-json.html"
            },
            {
                title: "PostgreSQL JSON Functions and Operators",
                url: "https://www.postgresql.org/docs/current/functions-json.html"
            },
            {
                title: "PostgreSQL CREATE TABLE Documentation",
                url: "https://www.postgresql.org/docs/current/sql-createtable.html"
            }
        ]
    },

    {
        id: 4,
        number: "04",
        title: "Insert Data",
        shortTitle: "Working with JSONB Data",
        subtitle:
            "Inserting structured records, nested JSON objects and arrays into the PostgreSQL JSONB column",

        overview:
            "After creating the products table, the next step is to insert actual data into it. This step demonstrates how PostgreSQL can store normal relational values together with flexible JSONB documents. Different products can contain different JSON structures while using the same table.",

        sections: [
            {
                heading: "4.1 Introduction to JSONB Data Insertion",
                paragraphs: [
                    `The products table created in Step 3 contains both normal PostgreSQL columns and a JSONB column named metadata.`,
                    `The relational columns such as name, category and price contain structured values. The metadata column is used to store additional product information in JSON format.`,
                    `The important feature of JSONB is that different rows do not have to contain exactly the same metadata structure. One product can contain RAM and processor information, while another can contain screen, battery and camera information.`,
                    `This allows PostgreSQL to store document-style information without creating a separate table for every type of product.`
                ],
                highlight:
                    "JSONB allows each row to contain a flexible JSON document while the main table continues to follow a normal relational structure."
            },

            {
                heading: "4.2 Basic INSERT Statement",
                paragraphs: [
                    `Data can be inserted into the products table using the normal PostgreSQL INSERT INTO statement.`,
                    `The relational values are inserted directly into their respective columns. The JSONB document is provided as a JSON object and explicitly converted to JSONB using the ::jsonb cast.`
                ],
                codeExamples: [
                    {
                        title: "Insert a simple product",
                        language: "sql",
                        code: `INSERT INTO products
(name, category, price, metadata)
VALUES
(
    'Wireless Mouse',
    'Electronics',
    799.00,
    '{
        "brand": "Logitech",
        "color": "Black",
        "wireless": true
    }'::jsonb
);`
                    }
                ],
                paragraphsAfter: [
                    `In this example, name, category and price are stored as normal relational values. The metadata column stores an entire JSON object.`,
                    `The ::jsonb expression tells PostgreSQL to interpret the supplied JSON text as JSONB data.`
                ]
            },

            {
                heading: "4.3 Inserting a Product with Nested JSON",
                paragraphs: [
                    `JSONB can store nested objects. This is useful when related properties naturally belong together.`,
                    `For example, a laptop may contain a storage object containing both the storage type and capacity.`
                ],
                codeExamples: [
                    {
                        title: "Insert laptop with nested metadata",
                        language: "sql",
                        code: `INSERT INTO products
(name, category, price, metadata)
VALUES
(
    'Lenovo IdeaPad',
    'Laptop',
    64999.00,
    '{
        "brand": "Lenovo",
        "ram": 16,
        "processor": "Intel Core i7",
        "storage": {
            "type": "SSD",
            "capacity": 512
        }
    }'::jsonb
);`
                    }
                ],
                paragraphsAfter: [
                    `Here, storage is not a simple value. It is another JSON object containing type and capacity.`,
                    `PostgreSQL stores this nested structure inside the metadata JSONB column.`
                ]
            },

            {
                heading: "4.4 Inserting JSON Arrays",
                paragraphs: [
                    `JSONB also supports arrays. Arrays can be useful for storing multiple related values such as product tags, available colors, supported features or accessories.`,
                    `For example, a laptop can have multiple tags describing how it can be used.`
                ],
                codeExamples: [
                    {
                        title: "Insert JSON array",
                        language: "sql",
                        code: `INSERT INTO products
(name, category, price, metadata)
VALUES
(
    'HP Pavilion',
    'Laptop',
    58999.00,
    '{
        "brand": "HP",
        "ram": 16,
        "tags": [
            "student",
            "programming",
            "office"
        ]
    }'::jsonb
);`
                    }
                ],
                paragraphsAfter: [
                    `The tags property contains an array of three strings. This array is stored as part of the JSONB document.`,
                    `This demonstrates that JSONB is capable of representing both simple values and collection-style data.`
                ]
            },

            {
                heading: "4.5 Inserting a Smartphone Document",
                paragraphs: [
                    `The next example uses a smartphone. Its metadata structure is different from the laptop examples.`,
                    `The smartphone contains screen, battery and camera information. These properties do not need to exist as separate columns in the products table.`
                ],
                codeExamples: [
                    {
                        title: "Insert smartphone data",
                        language: "sql",
                        code: `INSERT INTO products
(name, category, price, metadata)
VALUES
(
    'Samsung Galaxy',
    'Smartphone',
    44999.00,
    '{
        "brand": "Samsung",
        "screen": {
            "size": 6.7,
            "type": "AMOLED"
        },
        "battery": 5000,
        "camera": {
            "main": 50,
            "front": 12
        }
    }'::jsonb
);`
                    }
                ],
                paragraphsAfter: [
                    `The structure of this JSON document is different from the laptop documents. However, both types of products can be stored in the same products table.`
                ]
            },

            {
                heading: "4.6 Inserting Multiple Products at Once",
                paragraphs: [
                    `PostgreSQL also allows multiple rows to be inserted using a single INSERT statement.`,
                    `This can be useful when loading several product records into the database. Each row can contain a different JSONB document.`
                ],
                codeExamples: [
                    {
                        title: "Insert multiple products",
                        language: "sql",
                        code: `INSERT INTO products
(name, category, price, metadata)
VALUES
(
    'Dell Inspiron',
    'Laptop',
    69999.00,
    '{
        "brand": "Dell",
        "ram": 16,
        "storage": {
            "type": "SSD",
            "capacity": 512
        },
        "tags": ["student", "work"]
    }'::jsonb
),
(
    'OnePlus Nord',
    'Smartphone',
    29999.00,
    '{
        "brand": "OnePlus",
        "battery": 5000,
        "display": {
            "size": 6.74,
            "refresh_rate": 120
        },
        "colors": ["Black", "Blue"]
    }'::jsonb
),
(
    'Sony Headphones',
    'Accessories',
    8999.00,
    '{
        "brand": "Sony",
        "wireless": true,
        "features": [
            "Noise Cancellation",
            "Bluetooth",
            "Microphone"
        ]
    }'::jsonb
);`
                    }
                ],
                paragraphsAfter: [
                    `Each VALUES block represents one row. The metadata structure can be different for every product.`,
                    `This is one of the important document-style characteristics of JSONB. The database table remains the same while the internal JSON documents can vary.`
                ]
            },

            {
                heading: "4.7 Viewing the Inserted Records",
                paragraphs: [
                    `After inserting the products, the SELECT statement can be used to verify the stored records.`,
                    `The following query displays all columns from the products table.`
                ],
                codeExamples: [
                    {
                        title: "View all products",
                        language: "sql",
                        code: `SELECT *
FROM products;`
                    }
                ],
                paragraphsAfter: [
                    `The output should display the id, name, category, price, metadata and created_at columns.`,
                    `The metadata column should contain the JSONB documents inserted for each product.`
                ]
            },

            {
                heading: "4.8 Viewing Only the JSONB Column",
                paragraphs: [
                    `Sometimes it is useful to inspect only the JSONB documents rather than the complete table.`,
                    `The following query retrieves the product name and its metadata.`
                ],
                codeExamples: [
                    {
                        title: "View product metadata",
                        language: "sql",
                        code: `SELECT
    name,
    metadata
FROM products;`
                    }
                ],
                paragraphsAfter: [
                    `This makes it easier to see how different JSON documents are stored for different products.`
                ]
            },

            {
                heading: "4.9 Checking the Type of JSONB Data",
                paragraphs: [
                    `PostgreSQL provides the jsonb_typeof function to determine the JSON type of a JSONB value.`,
                    `For the metadata column, the top-level value is an object.`
                ],
                codeExamples: [
                    {
                        title: "Check JSONB type",
                        language: "sql",
                        code: `SELECT
    name,
    jsonb_typeof(metadata) AS metadata_type
FROM products;`
                    }
                ],
                paragraphsAfter: [
                    `For the inserted product records, metadata_type should normally be object because each metadata value begins with a JSON object.`
                ]
            },

            {
                heading: "4.10 Inserting Different JSON Structures",
                paragraphs: [
                    `The following examples show how different product documents can have different properties while still being stored in the same JSONB column.`,
                    `A laptop can contain processor and RAM information, a smartphone can contain camera and battery information, and an accessory can contain wireless and feature information.`
                ],
                table: {
                    headers: [
                        "Product",
                        "Relational Data",
                        "JSONB Metadata"
                    ],
                    rows: [
                        [
                            "Laptop",
                            "Name, category, price",
                            "RAM, processor, storage, tags"
                        ],
                        [
                            "Smartphone",
                            "Name, category, price",
                            "Screen, battery, camera"
                        ],
                        [
                            "Headphones",
                            "Name, category, price",
                            "Wireless, features, Bluetooth"
                        ]
                    ]
                },
                paragraphsAfter: [
                    `The important point is that the relational part remains consistent while the JSONB part can change according to the product.`
                ]
            },

            {
                heading: "4.11 Inserting Data from Node.js",
                paragraphs: [
                    `JSONB data can also be inserted through a Node.js backend. This is important because the final application uses Express.js to communicate with PostgreSQL.`,
                    `The PostgreSQL Node.js driver can receive a JavaScript object and send it to the JSONB column using a parameterized query.`,
                    `Parameterized queries are preferred because they separate SQL instructions from user-supplied values.`
                ],
                codeExamples: [
                    {
                        title: "Node.js JSONB insert",
                        language: "javascript",
                        code: `const query = \`
    INSERT INTO products
    (name, category, price, metadata)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
\`;

const values = [
    "MacBook Air",
    "Laptop",
    99999.00,
    {
        brand: "Apple",
        ram: 16,
        storage: {
            type: "SSD",
            capacity: 512
        },
        tags: [
            "student",
            "development"
        ]
    }
];

const result = await pool.query(query, values);

console.log(result.rows[0]);`
                    }
                ],
                paragraphsAfter: [
                    `In this example, metadata is represented as a JavaScript object. The pg library can serialize the object for PostgreSQL when it is supplied as a query parameter.`,
                    `This creates a direct connection between the JSON data received by a backend application and the JSONB data stored in PostgreSQL.`
                ]
            },

            {
                heading: "4.12 Why Parameterized Queries Are Used",
                paragraphs: [
                    `When data is inserted from an application, values should not be directly concatenated into an SQL string.`,
                    `Instead, PostgreSQL parameters such as $1, $2, $3 and $4 can be used. The actual values are supplied separately.`,
                    `This approach makes the query easier to manage and helps protect the application from SQL injection when handling external input.`
                ],
                codeExamples: [
                    {
                        title: "Parameterized INSERT",
                        language: "javascript",
                        code: `const query = \`
    INSERT INTO products
    (name, category, price, metadata)
    VALUES ($1, $2, $3, $4)
\`;

const values = [
    productName,
    productCategory,
    productPrice,
    productMetadata
];

await pool.query(query, values);`
                    }
                ]
            },

            {
                heading: "4.13 Checking Data from the Node.js Backend",
                paragraphs: [
                    `After inserting a product through Node.js, the returned row can be displayed in the terminal or sent as a response from an Express route.`,
                    `The following example creates a simple route that inserts one product and returns the inserted database record.`
                ],
                codeExamples: [
                    {
                        title: "Express route example",
                        language: "javascript",
                        code: `app.post("/products", async (req, res) => {
    try {
        const { name, category, price, metadata } = req.body;

        const result = await pool.query(
            \`
            INSERT INTO products
            (name, category, price, metadata)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
            \`,
            [name, category, price, metadata]
        );

        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Failed to insert product"
        });
    }
});`
                    }
                ],
                paragraphsAfter: [
                    `The client can send the product information as JSON. Express reads the request body and PostgreSQL stores the metadata inside the JSONB column.`,
                    `This demonstrates the complete connection between an application, an API and the PostgreSQL database.`
                ]
            },

            {
                heading: "4.14 Example JSON Request",
                paragraphs: [
                    `The Express route above can receive a JSON request containing both normal product information and flexible metadata.`
                ],
                codeExamples: [
                    {
                        title: "Example request body",
                        language: "json",
                        code: `{
    "name": "Lenovo ThinkPad",
    "category": "Laptop",
    "price": 74999,
    "metadata": {
        "brand": "Lenovo",
        "ram": 16,
        "storage": {
            "type": "SSD",
            "capacity": 1024
        },
        "features": [
            "Backlit Keyboard",
            "Fingerprint Reader"
        ]
    }
}`
                    }
                ],
                paragraphsAfter: [
                    `The name, category and price values correspond to relational columns, while the metadata object is stored in the JSONB column.`,
                    `The structure of metadata can be changed for another product without changing the products table itself.`
                ]
            },

            {
                heading: "4.15 Verifying the Inserted JSONB Data",
                paragraphs: [
                    `After inserting the data, it is important to verify that PostgreSQL stored the JSONB values correctly.`,
                    `A simple SELECT query can be used to inspect the complete records.`
                ],
                codeExamples: [
                    {
                        title: "Verify inserted data",
                        language: "sql",
                        code: `SELECT
    id,
    name,
    category,
    price,
    metadata,
    created_at
FROM products
ORDER BY id;`
                    }
                ],
                paragraphsAfter: [
                    `The query displays both the structured relational information and the JSONB document stored for each product.`,
                    `At this stage, the database contains multiple products with different metadata structures. This prepares the database for the JSONB querying operations discussed in the next step.`
                ]
            },

            {
                heading: "4.16 Understanding the Hybrid Data Model",
                paragraphs: [
                    `The data inserted in this step demonstrates the hybrid nature of PostgreSQL JSONB.`,
                    `The database has a fixed relational structure for important product information, while the metadata column provides flexibility for additional attributes.`,
                    `This means the application does not have to choose between storing everything in traditional columns and storing everything as documents. PostgreSQL can combine both approaches in the same table.`
                ],
                comparison: [
                    {
                        traditional:
                            "Product properties are stored only in predefined columns.",
                        jsonb:
                            "Core product properties remain relational while flexible properties are stored inside JSONB."
                    },
                    {
                        traditional:
                            "Adding a new product-specific field may require a schema change.",
                        jsonb:
                            "A new optional property can be added inside the JSONB document."
                    },
                    {
                        traditional:
                            "Nested data may require additional relational structures.",
                        jsonb:
                            "Nested objects and arrays can be represented directly inside the JSONB document."
                    }
                ]
            },

            {
                heading: "4.17 Step 4 Summary",
                paragraphs: [
                    `In this step, multiple product records were inserted into the PostgreSQL products table.`,
                    `The examples demonstrated simple JSON values, nested JSON objects and JSON arrays inside the metadata column.`,
                    `The same PostgreSQL table can store different JSONB structures for different products. This provides document-style flexibility while maintaining the relational structure of the database.`,
                    `The data can be inserted directly using SQL or through a Node.js and Express backend using parameterized queries.`,
                    `The next step will focus on querying the JSONB documents. PostgreSQL provides operators and functions that allow the application to extract values, search inside JSON documents, filter records and work with nested data.`
                ]
            }
        ],

        keyPoints: [
            "JSONB data can be inserted using a normal PostgreSQL INSERT statement.",
            "JSON objects can be converted to JSONB using the ::jsonb cast.",
            "JSONB supports nested objects.",
            "JSONB supports arrays and collections of values.",
            "Different rows can contain different JSONB structures.",
            "Relational columns and JSONB data can exist together in the same table.",
            "Node.js can insert JSONB data using parameterized PostgreSQL queries.",
            "Express.js can receive JSON request data and store it in PostgreSQL JSONB.",
            "Parameterized queries separate SQL instructions from application values.",
            "Inserted JSONB documents can later be queried using PostgreSQL JSON operators and functions."
        ],

        takeaway: {
            title: "Key Takeaway",
            text:
                "JSONB makes it possible to store flexible document-style information inside PostgreSQL. Different products can have different nested objects, arrays and properties while remaining part of the same relational table."
        },

        nextStep: {
            title: "Next: Step 5 — Query Examples",
            description:
                "In the next step, PostgreSQL JSONB operators and functions will be used to extract values, search inside documents, filter products, access nested objects and work with JSON arrays."
        },

        references: [
            {
                title: "PostgreSQL JSON Types Documentation",
                url: "https://www.postgresql.org/docs/current/datatype-json.html"
            },
            {
                title: "PostgreSQL JSON Functions and Operators",
                url: "https://www.postgresql.org/docs/current/functions-json.html"
            },
            {
                title: "PostgreSQL INSERT Documentation",
                url: "https://www.postgresql.org/docs/current/sql-insert.html"
            },
            {
                title: "node-postgres Documentation",
                url: "https://node-postgres.com/"
            }
        ]
    },

    {
        id: 5,
        number: "05",
        title: "Query Examples",
        shortTitle: "Querying JSONB Data",
        subtitle:
            "Using PostgreSQL JSONB operators and functions to search, extract, filter and modify document-style data",

        overview:
            "After inserting JSONB documents into PostgreSQL, the next step is to query the stored data. PostgreSQL provides operators and functions that allow applications to access JSON values, search inside nested objects, work with arrays, filter records and update JSONB documents using SQL.",

        sections: [
            {
                heading: "5.1 Introduction to JSONB Queries",
                paragraphs: [
                    `The main advantage of storing JSONB data is that PostgreSQL can directly work with the contents of the JSON document.`,
                    `Instead of retrieving the complete JSON document and processing everything inside the application, PostgreSQL can extract specific values or filter rows based on JSONB properties.`,
                    `This means that JSONB can be queried using SQL while still allowing the data to have a flexible document-style structure.`,
                    `The following examples use the products table created in the previous steps.`
                ],
                highlight:
                    "PostgreSQL allows JSONB data to be queried directly using SQL operators and functions, reducing the need to process the complete JSON document inside the application."
            },

            {
                heading: "5.2 Viewing Complete JSONB Documents",
                paragraphs: [
                    `The simplest JSONB query is to retrieve the complete metadata document from the products table.`
                ],
                codeExamples: [
                    {
                        title: "Display complete metadata",
                        language: "sql",
                        code: `SELECT
    name,
    metadata
FROM products;`
                    }
                ],
                paragraphsAfter: [
                    `The metadata column returns the complete JSONB object stored for each product.`
                ]
            },

            {
                heading: "5.3 Using the -> Operator",
                paragraphs: [
                    `The -> operator is used to access a JSON object field while keeping the result as JSON or JSONB.`,
                    `For example, the brand property can be extracted from the metadata document.`
                ],
                codeExamples: [
                    {
                        title: "Extract brand as JSONB",
                        language: "sql",
                        code: `SELECT
    name,
    metadata -> 'brand' AS brand
FROM products;`
                    }
                ],
                paragraphsAfter: [
                    `The result of metadata -> 'brand' is returned as a JSON value. For a string value, the result still behaves as JSONB rather than plain SQL text.`
                ]
            },

            {
                heading: "5.4 Using the ->> Operator",
                paragraphs: [
                    `The ->> operator is similar to ->, but it returns the selected JSON value as SQL text.`,
                    `This is useful when a JSON value needs to be displayed, compared or used as a normal text value.`
                ],
                codeExamples: [
                    {
                        title: "Extract brand as text",
                        language: "sql",
                        code: `SELECT
    name,
    metadata ->> 'brand' AS brand
FROM products;`
                    }
                ],
                comparison: [
                    {
                        traditional:
                            "metadata -> 'brand' returns the JSON value.",
                        jsonb:
                            "metadata ->> 'brand' returns the value as SQL text."
                    }
                ]
            },

            {
                heading: "5.5 Extracting Numeric Values from JSONB",
                paragraphs: [
                    `JSONB can contain numbers as well as strings. For example, the ram property in a laptop document can be extracted using ->>.`,
                    `Because ->> returns text, the value can be converted to an integer when numerical comparison is required.`
                ],
                codeExamples: [
                    {
                        title: "Read RAM value",
                        language: "sql",
                        code: `SELECT
    name,
    (metadata ->> 'ram')::INTEGER AS ram
FROM products
WHERE metadata ? 'ram';`
                    }
                ],
                paragraphsAfter: [
                    `The WHERE condition checks whether the ram property exists before attempting to convert it into an integer.`
                ]
            },

            {
                heading: "5.6 Checking Whether a JSON Key Exists",
                paragraphs: [
                    `The ? operator checks whether a specified key exists at the top level of a JSONB object.`,
                    `For example, we can find products whose metadata contains a battery property.`
                ],
                codeExamples: [
                    {
                        title: "Check key existence",
                        language: "sql",
                        code: `SELECT
    name,
    metadata
FROM products
WHERE metadata ? 'battery';`
                    }
                ],
                paragraphsAfter: [
                    `Only rows containing the battery key at the top level of metadata are returned.`
                ]
            },

            {
                heading: "5.7 Checking Multiple Keys",
                paragraphs: [
                    `PostgreSQL also provides operators for checking multiple keys.`,
                    `The ?| operator checks whether at least one key from a list exists, while ?& checks whether all specified keys exist.`
                ],
                codeExamples: [
                    {
                        title: "Check whether any key exists",
                        language: "sql",
                        code: `SELECT
    name
FROM products
WHERE metadata ?| array['ram', 'battery', 'camera'];`
                    },
                    {
                        title: "Check whether all keys exist",
                        language: "sql",
                        code: `SELECT
    name
FROM products
WHERE metadata ?& array['brand', 'ram'];`
                    }
                ],
                paragraphsAfter: [
                    `The first query returns products containing at least one of the specified keys. The second query requires both brand and ram to exist at the top level of the JSONB document.`
                ]
            },

            {
                heading: "5.8 Searching with the @> Containment Operator",
                paragraphs: [
                    `The @> operator checks whether one JSONB document contains another JSONB document.`,
                    `This is useful when searching for products based on a particular JSON property and value.`
                ],
                codeExamples: [
                    {
                        title: "Find products by brand",
                        language: "sql",
                        code: `SELECT
    name,
    category,
    price
FROM products
WHERE metadata @> '{"brand": "Lenovo"}'::jsonb;`
                    }
                ],
                paragraphsAfter: [
                    `The query returns products whose metadata contains a brand property with the value Lenovo.`,
                    `The containment operator is one of the important JSONB operators because it allows PostgreSQL to search for matching JSON structures.`
                ]
            },

            {
                heading: "5.9 Searching for a Specific Numeric Property",
                paragraphs: [
                    `The containment operator can also be used when the JSON value is numeric.`,
                    `For example, products containing a RAM value of 16 can be searched using JSONB containment.`
                ],
                codeExamples: [
                    {
                        title: "Find products with 16 GB RAM",
                        language: "sql",
                        code: `SELECT
    name,
    metadata
FROM products
WHERE metadata @> '{"ram": 16}'::jsonb;`
                    }
                ],
                paragraphsAfter: [
                    `This query searches for a JSON object containing the ram property with the numeric value 16.`
                ]
            },

            {
                heading: "5.10 Querying Nested JSON Objects",
                paragraphs: [
                    `JSONB can contain nested objects, such as the storage object inside a laptop document.`,
                    `PostgreSQL provides the #> operator to access a value using a path represented as an array of keys.`
                ],
                codeExamples: [
                    {
                        title: "Access nested storage object",
                        language: "sql",
                        code: `SELECT
    name,
    metadata #> '{storage}' AS storage
FROM products
WHERE metadata ? 'storage';`
                    },
                    {
                        title: "Access nested storage capacity",
                        language: "sql",
                        code: `SELECT
    name,
    metadata #>> '{storage,capacity}' AS storage_capacity
FROM products
WHERE metadata #> '{storage}' IS NOT NULL;`
                    }
                ],
                paragraphsAfter: [
                    `The #> operator returns the selected value as JSONB, while #>> returns the selected value as text.`,
                    `The path {storage,capacity} means that PostgreSQL should first find storage and then find capacity inside that object.`
                ]
            },

            {
                heading: "5.11 Filtering Using a JSONB Value",
                paragraphs: [
                    `JSONB values can be used directly in WHERE conditions.`,
                    `For example, a product can be selected based on the brand stored inside its metadata.`
                ],
                codeExamples: [
                    {
                        title: "Filter by brand",
                        language: "sql",
                        code: `SELECT
    name,
    category,
    price
FROM products
WHERE metadata ->> 'brand' = 'Samsung';`
                    }
                ],
                paragraphsAfter: [
                    `Here, ->> extracts the brand as text and the result is compared with the string Samsung.`
                ]
            },

            {
                heading: "5.12 Filtering JSONB Numeric Values",
                paragraphs: [
                    `When a JSONB number needs to be compared numerically, the extracted text value can be converted to the appropriate SQL numeric type.`,
                    `For example, products with at least 16 GB RAM can be selected as follows.`
                ],
                codeExamples: [
                    {
                        title: "Filter by RAM",
                        language: "sql",
                        code: `SELECT
    name,
    (metadata ->> 'ram')::INTEGER AS ram
FROM products
WHERE (metadata ->> 'ram')::INTEGER >= 16;`
                    }
                ],
                paragraphsAfter: [
                    `The ::INTEGER cast converts the extracted text into an integer before the comparison is performed.`
                ]
            },

            {
                heading: "5.13 Working with JSON Arrays",
                paragraphs: [
                    `JSONB arrays can contain multiple values. PostgreSQL provides JSON functions that can expand JSON arrays into individual rows.`,
                    `For example, the tags array of a product can be converted into separate result rows using jsonb_array_elements_text.`
                ],
                codeExamples: [
                    {
                        title: "Read product tags",
                        language: "sql",
                        code: `SELECT
    name,
    jsonb_array_elements_text(metadata -> 'tags') AS tag
FROM products
WHERE metadata ? 'tags';`
                    }
                ],
                paragraphsAfter: [
                    `If a product contains three tags, the function can return three rows for that product.`,
                    `This is useful when applications need to process individual values stored inside a JSONB array.`
                ]
            },

            {
                heading: "5.14 Searching Inside JSON Arrays",
                paragraphs: [
                    `JSONB containment can also be used to check whether an array contains a particular value.`,
                    `For example, a product can be searched based on whether programming appears in its tags array.`
                ],
                codeExamples: [
                    {
                        title: "Search an array value",
                        language: "sql",
                        code: `SELECT
    name,
    metadata
FROM products
WHERE metadata @> '{"tags": ["programming"]}'::jsonb;`
                    }
                ],
                paragraphsAfter: [
                    `This query searches for a metadata document whose tags array contains the specified value.`
                ]
            },

            {
                heading: "5.15 Updating a JSONB Property",
                paragraphs: [
                    `JSONB data can be modified without replacing the entire relational row.`,
                    `The jsonb_set function can be used to update or create a value at a specified path.`
                ],
                codeExamples: [
                    {
                        title: "Update RAM value",
                        language: "sql",
                        code: `UPDATE products
SET metadata = jsonb_set(
    metadata,
    '{ram}',
    '32'::jsonb
)
WHERE name = 'Lenovo IdeaPad';`
                    }
                ],
                paragraphsAfter: [
                    `The query changes the ram property to 32 inside the metadata document.`,
                    `The rest of the JSONB document remains available while the selected property is changed.`
                ]
            },

            {
                heading: "5.16 Updating a Nested JSONB Property",
                paragraphs: [
                    `The jsonb_set function can also update a value inside a nested object.`,
                    `For example, the storage capacity of a laptop can be changed without replacing the entire metadata document.`
                ],
                codeExamples: [
                    {
                        title: "Update nested storage capacity",
                        language: "sql",
                        code: `UPDATE products
SET metadata = jsonb_set(
    metadata,
    '{storage,capacity}',
    '1024'::jsonb
)
WHERE name = 'Lenovo IdeaPad';`
                    }
                ],
                paragraphsAfter: [
                    `The path {storage,capacity} tells PostgreSQL to locate the capacity property inside the storage object.`
                ]
            },

            {
                heading: "5.17 Adding a New JSONB Property",
                paragraphs: [
                    `The || operator can combine JSONB objects. It can therefore be used to add a new property to an existing JSONB document.`
                ],
                codeExamples: [
                    {
                        title: "Add a new property",
                        language: "sql",
                        code: `UPDATE products
SET metadata = metadata || '{"warranty": "2 years"}'::jsonb
WHERE name = 'Lenovo IdeaPad';`
                    }
                ],
                paragraphsAfter: [
                    `This adds the warranty property to the metadata object. If a property with the same key already exists, the value from the right-hand JSONB object is used for that top-level key.`
                ]
            },

            {
                heading: "5.18 Removing a JSONB Property",
                paragraphs: [
                    `A top-level property can be removed from a JSONB object using the - operator.`
                ],
                codeExamples: [
                    {
                        title: "Remove a JSON property",
                        language: "sql",
                        code: `UPDATE products
SET metadata = metadata - 'warranty'
WHERE name = 'Lenovo IdeaPad';`
                    }
                ],
                paragraphsAfter: [
                    `The warranty key is removed from the metadata document while the rest of the JSONB data remains in the row.`
                ]
            },

            {
                heading: "5.19 Finding Products by Category and JSONB Data",
                paragraphs: [
                    `One of the useful features of the hybrid model is that normal relational columns and JSONB conditions can be used in the same SQL query.`,
                    `For example, the category can be checked using a normal column while RAM is checked inside the JSONB document.`
                ],
                codeExamples: [
                    {
                        title: "Combine relational and JSONB conditions",
                        language: "sql",
                        code: `SELECT
    name,
    category,
    price,
    metadata
FROM products
WHERE category = 'Laptop'
  AND (metadata ->> 'ram')::INTEGER >= 16;`
                    }
                ],
                paragraphsAfter: [
                    `This demonstrates the hybrid nature of PostgreSQL. The category condition uses a traditional relational column, while the RAM condition uses JSONB data.`
                ]
            },

            {
                heading: "5.20 Sorting Using a JSONB Value",
                paragraphs: [
                    `A value extracted from JSONB can also be used for sorting.`,
                    `For example, laptop products can be sorted according to their RAM capacity.`
                ],
                codeExamples: [
                    {
                        title: "Sort by JSONB RAM value",
                        language: "sql",
                        code: `SELECT
    name,
    (metadata ->> 'ram')::INTEGER AS ram
FROM products
WHERE metadata ? 'ram'
ORDER BY ram DESC;`
                    }
                ],
                paragraphsAfter: [
                    `The extracted RAM value is converted into an integer so that the sorting is performed numerically rather than alphabetically.`
                ]
            },

            {
                heading: "5.21 Combining JSONB with Aggregate Functions",
                paragraphs: [
                    `JSONB values can also participate in queries that use SQL aggregate functions.`,
                    `For example, products can be grouped according to the brand stored inside the JSONB metadata.`
                ],
                codeExamples: [
                    {
                        title: "Count products by brand",
                        language: "sql",
                        code: `SELECT
    metadata ->> 'brand' AS brand,
    COUNT(*) AS product_count
FROM products
WHERE metadata ? 'brand'
GROUP BY metadata ->> 'brand'
ORDER BY product_count DESC;`
                    }
                ],
                paragraphsAfter: [
                    `This query extracts the brand from JSONB and uses the extracted value with GROUP BY and COUNT.`,
                    `This shows that JSONB values can participate in normal SQL analysis and reporting operations.`
                ]
            },

            {
                heading: "5.22 Querying JSONB from Node.js",
                paragraphs: [
                    `The same SQL JSONB queries can be executed from a Node.js backend using the pg library.`,
                    `For example, an Express application can retrieve all Lenovo products by executing a parameterized query.`
                ],
                codeExamples: [
                    {
                        title: "JSONB query from Node.js",
                        language: "javascript",
                        code: `const query = \`
    SELECT
        id,
        name,
        category,
        price,
        metadata
    FROM products
    WHERE metadata ->> 'brand' = $1;
\`;

const result = await pool.query(query, ["Lenovo"]);

console.log(result.rows);`
                    }
                ],
                paragraphsAfter: [
                    `The SQL query remains responsible for searching the JSONB data, while Node.js receives the resulting rows and can return them through an API.`
                ]
            },

            {
                heading: "5.23 Example Express API for JSONB Search",
                paragraphs: [
                    `An Express route can expose JSONB search functionality through an API endpoint.`,
                    `The following example searches products by brand using a URL parameter.`
                ],
                codeExamples: [
                    {
                        title: "Express JSONB search endpoint",
                        language: "javascript",
                        code: `app.get("/products/brand/:brand", async (req, res) => {
    try {
        const { brand } = req.params;

        const result = await pool.query(
            \`
            SELECT *
            FROM products
            WHERE metadata ->> 'brand' = $1;
            \`,
            [brand]
        );

        res.json(result.rows);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to search products"
        });
    }
});`
                    }
                ],
                paragraphsAfter: [
                    `A request such as /products/brand/Lenovo can be used to retrieve products whose JSONB metadata contains the specified brand.`,
                    `This demonstrates how PostgreSQL JSONB querying can become part of a normal REST API.`
                ]
            },

            {
                heading: "5.24 JSONB Query Operators Used in This Assignment",
                paragraphs: [
                    `PostgreSQL provides several operators for working with JSON and JSONB values. The most important operators used in this assignment are summarized below.`
                ],
                table: {
                    headers: [
                        "Operator / Function",
                        "Purpose",
                        "Example"
                    ],
                    rows: [
                        [
                            "->",
                            "Get a JSON object field",
                            "metadata -> 'brand'"
                        ],
                        [
                            "->>",
                            "Get a JSON field as text",
                            "metadata ->> 'brand'"
                        ],
                        [
                            "#>",
                            "Get a nested JSON value",
                            "metadata #> '{storage}'"
                        ],
                        [
                            "#>>",
                            "Get a nested value as text",
                            "metadata #>> '{storage,capacity}'"
                        ],
                        [
                            "@>",
                            "Check JSONB containment",
                            "metadata @> '{\"brand\":\"Lenovo\"}'"
                        ],
                        [
                            "?",
                            "Check whether a top-level key exists",
                            "metadata ? 'ram'"
                        ],
                        [
                            "?|",
                            "Check whether any key exists",
                            "metadata ?| array['ram','battery']"
                        ],
                        [
                            "?&",
                            "Check whether all keys exist",
                            "metadata ?& array['brand','ram']"
                        ],
                        [
                            "jsonb_set",
                            "Update a value at a JSON path",
                            "jsonb_set(metadata, '{ram}', '32')"
                        ],
                        [
                            "||",
                            "Combine JSONB objects",
                            "metadata || '{\"warranty\":\"2 years\"}'"
                        ],
                        [
                            "-",
                            "Remove a top-level key",
                            "metadata - 'warranty'"
                        ]
                    ]
                }
            },

            {
                heading: "5.25 SQL Data + JSONB Data in One Query",
                paragraphs: [
                    `One of the most important observations from these examples is that JSONB does not replace SQL. Instead, JSONB becomes another data type that can be used within SQL queries.`,
                    `A query can combine normal SQL conditions, sorting, grouping and aggregation with JSONB operators and functions.`,
                    `This allows PostgreSQL to handle structured relational data and semi-structured document data together.`
                ],
                codeExamples: [
                    {
                        title: "Combined SQL and JSONB query",
                        language: "sql",
                        code: `SELECT
    name,
    category,
    price,
    metadata ->> 'brand' AS brand,
    (metadata ->> 'ram')::INTEGER AS ram
FROM products
WHERE category = 'Laptop'
  AND metadata ? 'ram'
  AND (metadata ->> 'ram')::INTEGER >= 16
ORDER BY price DESC;`
                    }
                ],
                paragraphsAfter: [
                    `The query uses category and price as normal relational fields while extracting and filtering RAM and brand from the JSONB metadata.`
                ]
            },

            {
                heading: "5.26 Why JSONB Queries Are Useful",
                paragraphs: [
                    `JSONB queries are useful when the structure of additional application data can change between records.`,
                    `Instead of creating a large number of optional columns, the application can store variable properties in JSONB and query them when required.`,
                    `At the same time, frequently used and important business fields can remain normal relational columns.`,
                    `This makes the hybrid approach useful for applications where some information is predictable and some information is flexible.`
                ],
                bullets: [
                    "Product catalogs with different specifications.",
                    "User profiles with optional attributes.",
                    "Application settings and preferences.",
                    "Configuration data.",
                    "Metadata associated with database records.",
                    "Forms containing dynamic fields.",
                    "Systems where additional properties may evolve over time."
                ]
            },

            {
                heading: "5.27 Querying JSONB Without a Separate NoSQL Database",
                paragraphs: [
                    `The examples in this step demonstrate the main concept of the assignment. PostgreSQL can store and query document-style JSON data without requiring a separate document database for every use case.`,
                    `The JSONB column provides flexible storage, while PostgreSQL continues to provide SQL queries, relational columns, constraints and transactions.`,
                    `This does not mean PostgreSQL and MongoDB are identical systems. They use different database models and have different architectures. The important point is that PostgreSQL JSONB can support many document-oriented data requirements within a relational database.`
                ],
                highlight:
                    "PostgreSQL JSONB provides document-style storage and querying inside PostgreSQL; it should be understood as a feature of a relational database rather than PostgreSQL becoming MongoDB."
            },

            {
                heading: "5.28 Step 5 Summary",
                paragraphs: [
                    `In this step, multiple PostgreSQL JSONB operators and functions were used to work with the product metadata.`,
                    `The examples demonstrated extracting values using -> and ->>, accessing nested data using #> and #>>, checking key existence using ?, searching using the @> containment operator and working with arrays.`,
                    `The step also demonstrated updating JSONB values using jsonb_set, adding properties using || and removing properties using the - operator.`,
                    `JSONB data can be queried together with normal relational columns in the same SQL statement. This is one of the main reasons PostgreSQL JSONB is useful for hybrid database applications.`,
                    `The next step will compare PostgreSQL with JSONB and MongoDB conceptually, including data models, querying, schema flexibility, relationships, transactions, indexing and suitable use cases.`
                ]
            }
        ],

        keyPoints: [
            "The -> operator extracts a JSON value.",
            "The ->> operator extracts a JSON value as SQL text.",
            "#> and #>> can access nested JSON paths.",
            "The @> operator checks JSONB containment.",
            "The ? operator checks whether a top-level key exists.",
            "?| and ?& can check multiple keys.",
            "JSONB arrays can be queried and expanded using PostgreSQL JSON functions.",
            "jsonb_set can update a JSONB value at a specific path.",
            "The || operator can combine JSONB objects.",
            "The - operator can remove a top-level JSONB key.",
            "JSONB conditions can be combined with normal SQL conditions.",
            "JSONB queries can be executed directly from a Node.js and Express backend.",
            "PostgreSQL JSONB provides document-style querying without removing relational SQL capabilities."
        ],

        takeaway: {
            title: "Key Takeaway",
            text:
                "PostgreSQL JSONB is not only a storage format. PostgreSQL provides operators and functions that allow JSON documents to be searched, filtered, extracted and modified directly using SQL."
        },

        nextStep: {
            title: "Next: Step 6 — Comparison",
            description:
                "The next step will compare PostgreSQL with JSONB and MongoDB, focusing on data models, schema flexibility, queries, relationships, transactions, indexing and practical use cases."
        },

        references: [
            {
                title: "PostgreSQL JSON Types Documentation",
                url: "https://www.postgresql.org/docs/current/datatype-json.html"
            },
            {
                title: "PostgreSQL JSON Functions and Operators",
                url: "https://www.postgresql.org/docs/current/functions-json.html"
            },
            {
                title: "PostgreSQL JSONB Indexing",
                url: "https://www.postgresql.org/docs/current/datatype-json.html"
            },
            {
                title: "PostgreSQL GIN Index Documentation",
                url: "https://www.postgresql.org/docs/current/gin.html"
            }
        ]
        },

    {
        id: 6,
        number: "06",
        title: "Comparison",
        shortTitle: "PostgreSQL JSONB vs MongoDB",
        subtitle:
            "Understanding the similarities, differences, strengths and suitable use cases of relational JSONB and document databases",

        overview:
            "PostgreSQL JSONB and MongoDB can both store document-style JSON data, but they are built around different database models. PostgreSQL is primarily a relational database that provides JSONB as a native data type, while MongoDB is a document-oriented database. This step compares their data models, schema flexibility, querying, relationships, transactions, indexing and practical use cases.",

        sections: [
            {
                heading: "6.1 Introduction to the Comparison",
                paragraphs: [
                    `The main objective of this assignment is to understand how PostgreSQL can support both relational and document-style data using JSONB.`,
                    `MongoDB is designed around a document-oriented model where data is stored as BSON documents inside collections. PostgreSQL, on the other hand, is a relational database where data is normally organized into tables, rows and columns.`,
                    `PostgreSQL JSONB adds the ability to store and query JSON documents directly inside relational tables.`,
                    `Therefore, PostgreSQL JSONB and MongoDB can solve some similar application requirements, but they do so using different database architectures.`
                ],
                highlight:
                    "PostgreSQL JSONB provides document-style data capabilities inside a relational database, while MongoDB is designed primarily as a document-oriented database."
            },

            {
                heading: "6.2 Basic Data Model",
                paragraphs: [
                    `The first major difference is the underlying data model.`,
                    `PostgreSQL organizes its primary data model around tables and rows. A table can contain normal relational columns and can also contain a JSONB column.`,
                    `MongoDB organizes data around databases, collections and documents. Documents are stored as BSON, which is a binary representation of JSON-like data.`
                ],
                table: {
                    headers: [
                        "Concept",
                        "PostgreSQL",
                        "MongoDB"
                    ],
                    rows: [
                        [
                            "Primary model",
                            "Relational",
                            "Document-oriented"
                        ],
                        [
                            "Main container",
                            "Table",
                            "Collection"
                        ],
                        [
                            "Record",
                            "Row",
                            "Document"
                        ],
                        [
                            "Flexible data",
                            "JSONB column",
                            "Document fields"
                        ],
                        [
                            "Query language",
                            "SQL with JSON/JSONB operators",
                            "MongoDB Query Language"
                        ]
                    ]
                }
            },

            {
                heading: "6.3 How the Data Looks",
                paragraphs: [
                    `In PostgreSQL, the product example used in this assignment has a relational structure with a metadata JSONB column.`,
                    `For example, the table can contain name, category and price as normal columns while additional information is stored inside metadata.`
                ],
                codeExamples: [
                    {
                        title: "PostgreSQL JSONB record",
                        language: "sql",
                        code: `INSERT INTO products
(name, category, price, metadata)
VALUES
(
    'Lenovo IdeaPad',
    'Laptop',
    64999.00,
    '{
        "brand": "Lenovo",
        "ram": 16,
        "storage": {
            "type": "SSD",
            "capacity": 512
        }
    }'::jsonb
);`
                    }
                ],
                paragraphsAfter: [
                    `The same general product information in MongoDB would normally be represented as a document inside a collection.`
                ]
            },

            {
                heading: "6.4 MongoDB Document Example",
                paragraphs: [
                    `MongoDB stores documents in collections. A similar product document could be represented using a MongoDB-style document as follows.`
                ],
                codeExamples: [
                    {
                        title: "MongoDB-style document",
                        language: "javascript",
                        code: `{
    name: "Lenovo IdeaPad",
    category: "Laptop",
    price: 64999,
    metadata: {
        brand: "Lenovo",
        ram: 16,
        storage: {
            type: "SSD",
            capacity: 512
        }
    }
}`
                    }
                ],
                paragraphsAfter: [
                    `The document contains the same type of flexible information, but MongoDB treats the document itself as the primary record rather than storing it inside a relational table.`
                ]
            },

            {
                heading: "6.5 Schema Structure",
                paragraphs: [
                    `PostgreSQL traditionally uses a defined schema. Columns and their data types are specified when a table is created.`,
                    `JSONB provides flexibility inside the JSONB column, but the relational columns surrounding it still follow the PostgreSQL table definition.`,
                    `MongoDB documents are more flexible because documents in the same collection can contain different fields and structures.`
                ],
                comparison: [
                    {
                        traditional:
                            "PostgreSQL tables normally define columns and data types.",
                        jsonb:
                            "JSONB provides flexible fields inside a defined relational table."
                    },
                    {
                        traditional:
                            "MongoDB documents can have different fields within the same collection.",
                        jsonb:
                            "PostgreSQL JSONB can also store different document structures, but inside a JSONB column."
                    }
                ]
            },

            {
                heading: "6.6 Schema Flexibility",
                paragraphs: [
                    `Both PostgreSQL JSONB and MongoDB can handle data whose structure changes over time.`,
                    `In PostgreSQL, flexible properties can be placed inside JSONB while important business fields remain normal columns.`,
                    `In MongoDB, the document model itself provides this flexibility because documents do not have to follow one fixed relational table structure.`
                ],
                table: {
                    headers: [
                        "Aspect",
                        "PostgreSQL + JSONB",
                        "MongoDB"
                    ],
                    rows: [
                        [
                            "Fixed structure",
                            "Available through relational columns",
                            "Less restrictive document structure"
                        ],
                        [
                            "Flexible fields",
                            "Stored inside JSONB",
                            "Stored directly in documents"
                        ],
                        [
                            "Nested objects",
                            "Supported in JSONB",
                            "Supported in documents"
                        ],
                        [
                            "Arrays",
                            "Supported in JSONB",
                            "Supported in documents"
                        ]
                    ]
                }
            },

            {
                heading: "6.7 Querying Data",
                paragraphs: [
                    `PostgreSQL uses SQL for relational queries and provides additional JSONB operators and functions for working with JSON data.`,
                    `MongoDB uses its own document query syntax and operators to search and manipulate documents.`,
                    `The two systems therefore provide different query interfaces even though both can perform document-style operations.`
                ],
                codeExamples: [
                    {
                        title: "PostgreSQL JSONB query",
                        language: "sql",
                        code: `SELECT
    name,
    metadata ->> 'brand' AS brand
FROM products
WHERE metadata ->> 'brand' = 'Lenovo';`
                    },
                    {
                        title: "MongoDB-style query",
                        language: "javascript",
                        code: `db.products.find({
    "metadata.brand": "Lenovo"
});`
                    }
                ],
                paragraphsAfter: [
                    `The PostgreSQL query uses SQL together with the ->> JSONB operator. The MongoDB example uses MongoDB's document query syntax and dot notation for the nested field.`
                ]
            },

            {
                heading: "6.8 Querying Nested Data",
                paragraphs: [
                    `Both databases support nested data, but the query syntax is different.`,
                    `In PostgreSQL, JSONB operators such as #> and #>> can be used to access nested JSON values.`,
                    `MongoDB commonly uses dot notation to access nested document fields.`
                ],
                codeExamples: [
                    {
                        title: "PostgreSQL nested query",
                        language: "sql",
                        code: `SELECT
    name,
    metadata #>> '{storage,capacity}' AS capacity
FROM products
WHERE metadata #> '{storage}' IS NOT NULL;`
                    },
                    {
                        title: "MongoDB nested query",
                        language: "javascript",
                        code: `db.products.find({
    "metadata.storage.capacity": 512
});`
                    }
                ]
            },

            {
                heading: "6.9 Relational Data and Relationships",
                paragraphs: [
                    `One of the major differences between PostgreSQL and MongoDB is how relationships are represented.`,
                    `PostgreSQL is designed around relational data and provides foreign keys, joins and referential integrity.`,
                    `MongoDB can represent relationships using embedded documents or references between documents. The application or database operations can then work with those relationships according to the application's design.`
                ],
                table: {
                    headers: [
                        "Relationship Feature",
                        "PostgreSQL",
                        "MongoDB"
                    ],
                    rows: [
                        [
                            "Foreign keys",
                            "Native relational feature",
                            "No relational foreign-key constraint in the same sense"
                        ],
                        [
                            "JOIN",
                            "Native SQL JOIN operations",
                            "Document-oriented querying and aggregation mechanisms"
                        ],
                        [
                            "Embedded data",
                            "Possible inside JSONB",
                            "Native document-model concept"
                        ],
                        [
                            "Referential integrity",
                            "Can be enforced using relational constraints",
                            "Typically handled through application/data-model design"
                        ]
                    ]
                }
            },

            {
                heading: "6.10 Transactions",
                paragraphs: [
                    `PostgreSQL provides transactional support as a core relational database feature. SQL operations can be grouped into transactions and controlled using COMMIT and ROLLBACK.`,
                    `MongoDB also supports transactions, including transactions that can span multiple documents and collections in supported configurations.`,
                    `Therefore, it is not accurate to describe MongoDB simply as a database without transactions. Both systems provide transactional mechanisms, although their data models and transaction usage patterns differ.`
                ],
                codeExamples: [
                    {
                        title: "PostgreSQL transaction example",
                        language: "sql",
                        code: `BEGIN;

UPDATE products
SET price = 62999
WHERE name = 'Lenovo IdeaPad';

UPDATE products
SET metadata = jsonb_set(
    metadata,
    '{ram}',
    '32'::jsonb
)
WHERE name = 'Lenovo IdeaPad';

COMMIT;`
                    }
                ],
                paragraphsAfter: [
                    `The transaction groups multiple operations together so they can be committed as a unit or rolled back if an error occurs before the transaction is committed.`
                ]
            },

            {
                heading: "6.11 Indexing JSONB and Document Data",
                paragraphs: [
                    `Both PostgreSQL JSONB and MongoDB provide indexing mechanisms to improve query performance.`,
                    `PostgreSQL can create indexes on JSONB data. A commonly used option is a GIN index, which can support efficient searching for many JSONB operators.`,
                    `MongoDB also provides indexes on document fields, including fields inside nested documents and arrays.`
                ],
                codeExamples: [
                    {
                        title: "PostgreSQL GIN index",
                        language: "sql",
                        code: `CREATE INDEX products_metadata_gin_idx
ON products
USING GIN (metadata);`
                    }
                ],
                paragraphsAfter: [
                    `The GIN index shown above creates an index on the metadata JSONB column. Index design should depend on the actual query patterns of an application.`
                ]
            },

            {
                heading: "6.12 SQL + JSONB vs Document Query Model",
                paragraphs: [
                    `PostgreSQL JSONB has an important advantage for applications that already depend heavily on SQL. The application can continue using SQL for relational data and use JSONB operators when working with flexible fields.`,
                    `MongoDB uses a document-oriented query model throughout the database. This can make the document structure central to the way an application models and queries its data.`
                ],
                comparison: [
                    {
                        traditional:
                            "PostgreSQL uses SQL as the primary query language.",
                        jsonb:
                            "JSONB operators and functions extend SQL for document-style data."
                    },
                    {
                        traditional:
                            "MongoDB uses MongoDB Query Language and aggregation operations.",
                        jsonb:
                            "Document fields are queried using MongoDB-specific syntax."
                    }
                ]
            },

            {
                heading: "6.13 Data Integrity",
                paragraphs: [
                    `PostgreSQL provides many relational constraints such as PRIMARY KEY, UNIQUE, NOT NULL and FOREIGN KEY. These can be used together with JSONB columns.`,
                    `MongoDB provides schema validation features that can be used when applications need rules for document structure, but its document model does not use relational foreign-key constraints in the same way as PostgreSQL.`,
                    `Therefore, the database design should determine where strict relational constraints are important and where document flexibility is more useful.`
                ],
                table: {
                    headers: [
                        "Feature",
                        "PostgreSQL + JSONB",
                        "MongoDB"
                    ],
                    rows: [
                        [
                            "Primary keys",
                            "Native primary key support",
                            "Documents use a unique _id field"
                        ],
                        [
                            "NOT NULL",
                            "Native relational constraint",
                            "Can use validation rules"
                        ],
                        [
                            "UNIQUE",
                            "Native unique constraints/indexes",
                            "Unique indexes are available"
                        ],
                        [
                            "Foreign keys",
                            "Native relational feature",
                            "Relationships are modeled differently"
                        ],
                        [
                            "JSON/document validation",
                            "Can combine relational constraints with application/database checks",
                            "Schema validation can be configured for collections"
                        ]
                    ]
                }
            },

            {
                heading: "6.14 Storage Model",
                paragraphs: [
                    `PostgreSQL stores JSONB using a decomposed binary representation rather than storing the original JSON text exactly as provided.`,
                    `MongoDB stores documents using BSON, a binary representation of JSON-like documents.`,
                    `Both formats are designed to allow the database engine to work with structured document data rather than treating it only as plain text.`
                ]
            },

            {
                heading: "6.15 When PostgreSQL JSONB Can Be Used",
                paragraphs: [
                    `PostgreSQL JSONB can be useful when an application needs relational database features together with flexible or semi-structured data.`,
                    `Examples include applications where core business information is structured but additional attributes vary between records.`
                ],
                bullets: [
                    "Product catalogs with different specifications.",
                    "User profiles with optional fields.",
                    "Application configuration data.",
                    "Dynamic form responses.",
                    "Metadata associated with relational records.",
                    "Systems that already use PostgreSQL for their main relational data.",
                    "Applications that need SQL reporting together with flexible JSON data."
                ]
            },

            {
                heading: "6.16 When MongoDB Can Be Considered",
                paragraphs: [
                    `MongoDB can be considered when an application's primary data model is naturally document-oriented and most application records are naturally represented as documents.`,
                    `Its collection and document model can be useful when the application works mainly with document-shaped data and frequently accesses related information as part of those documents.`,
                    `The choice depends on application requirements, data relationships, query patterns, consistency requirements, operational environment and team expertise.`
                ]
            },

            {
                heading: "6.17 Hybrid PostgreSQL Design",
                paragraphs: [
                    `One of the important findings of this assignment is that PostgreSQL does not require all information to follow only one storage style.`,
                    `An application can use normal relational columns for important and stable business information while using JSONB for flexible attributes.`,
                    `For example, a product system can store id, name, category and price as relational columns and store variable specifications such as RAM, camera, battery, storage or features inside JSONB.`
                ],
                architecture: [
                    "Application / Express.js",
                    "PostgreSQL SQL Queries",
                    "Relational Columns + JSONB",
                    "Structured + Semi-Structured Data"
                ]
            },

            {
                heading: "6.18 Feature-by-Feature Comparison",
                paragraphs: [
                    `The following table summarizes the major concepts discussed in this assignment. It is a factual comparison rather than a ranking because the appropriate choice depends on the application's requirements.`
                ],
                table: {
                    headers: [
                        "Feature",
                        "PostgreSQL + JSONB",
                        "MongoDB"
                    ],
                    rows: [
                        [
                            "Database model",
                            "Relational database with JSONB support",
                            "Document-oriented database"
                        ],
                        [
                            "Primary structure",
                            "Tables and rows",
                            "Collections and documents"
                        ],
                        [
                            "Flexible data",
                            "JSONB columns",
                            "Flexible document fields"
                        ],
                        [
                            "Query language",
                            "SQL + JSONB operators/functions",
                            "MongoDB Query Language"
                        ],
                        [
                            "Nested documents",
                            "Supported through JSONB",
                            "Native document feature"
                        ],
                        [
                            "Arrays",
                            "Supported through JSONB",
                            "Supported in documents"
                        ],
                        [
                            "Joins",
                            "Native SQL JOIN",
                            "Different document-oriented mechanisms"
                        ],
                        [
                            "Foreign keys",
                            "Native relational feature",
                            "Relationships modeled differently"
                        ],
                        [
                            "Transactions",
                            "Supported",
                            "Supported"
                        ],
                        [
                            "JSON/document indexing",
                            "JSONB indexes such as GIN",
                            "Indexes on document fields"
                        ],
                        [
                            "Relational constraints",
                            "Strong native support",
                            "Uses document validation and indexes differently"
                        ],
                        [
                            "Best fit",
                            "Applications combining relational and flexible data",
                            "Applications centered around document-oriented data"
                        ]
                    ]
                }
            },

            {
                heading: "6.19 Advantages of the PostgreSQL JSONB Approach",
                paragraphs: [
                    `Using PostgreSQL JSONB can reduce the need to maintain a separate database when an application already needs PostgreSQL for relational data and also has some flexible document-style information.`,
                    `The same database can provide SQL querying, relational relationships, transactions and JSONB functionality.`,
                    `This can simplify an architecture when the application's flexible data requirements fit naturally inside JSONB.`
                ],
                bullets: [
                    "Relational and JSONB data can exist in the same database.",
                    "SQL can be used together with JSONB operators.",
                    "Relational constraints remain available.",
                    "JSONB supports nested objects and arrays.",
                    "JSONB can be indexed.",
                    "Existing PostgreSQL applications can introduce JSONB without moving all data to a document database.",
                    "One database can support multiple data representation needs."
                ]
            },

            {
                heading: "6.20 Considerations and Limitations",
                paragraphs: [
                    `JSONB is flexible, but flexibility does not mean that every type of data should be stored as JSONB.`,
                    `Important relational data may be easier to validate, join and constrain when represented using normal PostgreSQL columns and related tables.`,
                    `Very large or heavily document-oriented applications may have different requirements from applications that mainly use relational data with some flexible attributes.`,
                    `Similarly, MongoDB may be more natural for applications whose data model is primarily document-oriented.`,
                    `Therefore, database selection should be based on the application's data model and requirements rather than simply choosing a technology because it supports JSON.`
                ],
                highlight:
                    "JSONB is most useful when flexible data is part of a broader PostgreSQL relational design. It should not automatically replace relational tables or every other database model."
            },

            {
                heading: "6.21 Main Difference in One Example",
                paragraphs: [
                    `Consider an online product application.`,
                    `With PostgreSQL JSONB, the application can keep important product information such as product id, name, category and price in relational columns while storing product-specific specifications in metadata.`,
                    `With MongoDB, the product can be represented primarily as a document containing all of its fields and nested information.`,
                    `Both approaches can represent flexible product data. The important difference is the overall database model surrounding that document-style data.`
                ],
                codeExamples: [
                    {
                        title: "PostgreSQL hybrid model",
                        language: "text",
                        code: `products table
│
├── id
├── name
├── category
├── price
│
└── metadata (JSONB)
      ├── brand
      ├── ram
      ├── storage
      └── features`
                    },
                    {
                        title: "MongoDB document model",
                        language: "text",
                        code: `products collection
│
└── document
      ├── name
      ├── category
      ├── price
      └── metadata
            ├── brand
            ├── ram
            ├── storage
            └── features`
                    }
                ]
            },

            {
                heading: "6.22 Final Comparison Summary",
                paragraphs: [
                    `PostgreSQL and MongoDB are not identical databases. PostgreSQL is primarily relational and JSONB is one of its native data types for storing and processing JSON documents. MongoDB is primarily document-oriented and stores BSON documents in collections.`,
                    `The experiments in this assignment demonstrate that PostgreSQL JSONB can handle many common document-style requirements, including nested objects, arrays, flexible properties and JSON-specific queries.`,
                    `At the same time, PostgreSQL retains relational features such as SQL, tables, constraints, relationships and transactions.`,
                    `MongoDB provides a different model in which documents are the central representation of application data.`,
                    `The appropriate database therefore depends on the application's data structure, relationships, query patterns, consistency requirements and operational needs.`
                ]
            }
        ],

        keyPoints: [
            "PostgreSQL is primarily a relational database, while MongoDB is primarily document-oriented.",
            "PostgreSQL JSONB allows JSON documents to be stored inside relational tables.",
            "MongoDB stores BSON documents inside collections.",
            "Both systems support nested objects and arrays.",
            "PostgreSQL uses SQL together with JSONB operators and functions.",
            "MongoDB uses MongoDB Query Language and aggregation operations.",
            "PostgreSQL provides native relational features such as foreign keys and JOIN operations.",
            "Both PostgreSQL and MongoDB support transactions.",
            "Both databases provide indexing mechanisms for document-style data.",
            "PostgreSQL JSONB can be useful for applications combining structured and flexible data.",
            "MongoDB can be useful when the application's primary data model is document-oriented.",
            "The choice between the two should depend on application requirements rather than JSON support alone."
        ],

        takeaway: {
            title: "Key Takeaway",
            text:
                "PostgreSQL JSONB and MongoDB can both handle document-style data, but they follow different database models. PostgreSQL combines relational capabilities with JSONB flexibility, while MongoDB is built around a document-oriented model."
        },

        nextStep: {
            title: "Next: Step 7 — Conclusion",
            description:
                "The final step will summarize the complete assignment, explain the findings from PostgreSQL JSONB, discuss practical applications and limitations, and present the final conclusion."
        },

        references: [
            {
                title: "PostgreSQL JSON Types Documentation",
                url: "https://www.postgresql.org/docs/current/datatype-json.html"
            },
            {
                title: "PostgreSQL JSON Functions and Operators",
                url: "https://www.postgresql.org/docs/current/functions-json.html"
            },
            {
                title: "PostgreSQL GIN Index Documentation",
                url: "https://www.postgresql.org/docs/current/gin.html"
            },
            {
                title: "MongoDB Documentation",
                url: "https://www.mongodb.com/docs/"
            },
            {
                title: "MongoDB Data Model",
                url: "https://www.mongodb.com/docs/manual/core/data-modeling-introduction/"
            },
            {
                title: "MongoDB Transactions Documentation",
                url: "https://www.mongodb.com/docs/manual/core/transactions/"
            }
        ]
    },

    {
        id: 7,
        number: "07",
        title: "Conclusion",
        shortTitle: "Final Findings",
        subtitle:
            "Understanding how PostgreSQL can combine relational SQL capabilities with flexible JSONB document storage",

        overview:
            "This final step summarizes the complete assignment and the practical findings from using JSONB in PostgreSQL. The implementation demonstrated how PostgreSQL can store structured relational information together with flexible JSON documents, query nested data, work with arrays and update JSONB values using SQL.",

        sections: [
            {
                heading: "7.1 Introduction to the Conclusion",
                paragraphs: [
                    `The purpose of this assignment was to explore the use of JSONB in PostgreSQL and understand how it can be used for document-style data that is commonly associated with NoSQL databases such as MongoDB.`,
                    `During the assignment, a PostgreSQL database was created and connected with a Node.js and Express.js backend. A products table was then designed using both traditional relational columns and a JSONB column.`,
                    `Different JSON documents were inserted into the database, including nested objects and arrays. PostgreSQL JSONB operators and functions were then used to retrieve, search, filter and modify the stored data.`,
                    `The complete implementation demonstrates that PostgreSQL can handle structured relational data and semi-structured JSON data within the same database system.`
                ],
                highlight:
                    "The main finding of this assignment is that PostgreSQL JSONB provides document-style flexibility while retaining the relational capabilities of PostgreSQL."
            },

            {
                heading: "7.2 What Was Implemented",
                paragraphs: [
                    `The assignment was implemented step by step, beginning with the database setup and ending with JSONB queries and comparison with MongoDB.`
                ],
                numberedList: [
                    "PostgreSQL and Node.js environment was prepared.",
                    "A PostgreSQL database named jsonb_assignment was created.",
                    "The products table was designed using relational columns and a JSONB metadata column.",
                    "Multiple product records were inserted with different JSON structures.",
                    "Nested JSON objects and arrays were stored inside JSONB.",
                    "JSONB operators such as ->, ->>, #>, #>>, @>, ?, ?| and ?& were explored.",
                    "JSONB data was updated using functions such as jsonb_set.",
                    "Properties were added and removed from JSONB documents.",
                    "JSONB queries were connected with Node.js and Express.js.",
                    "PostgreSQL JSONB was compared conceptually with MongoDB."
                ]
            },

            {
                heading: "7.3 Final Database Structure",
                paragraphs: [
                    `The final database design uses a hybrid structure. Core product information is stored using normal PostgreSQL columns, while variable product-specific information is stored inside the metadata JSONB column.`
                ],
                codeExamples: [
                    {
                        title: "Final database structure",
                        language: "text",
                        code: `PostgreSQL Database
│
└── jsonb_assignment
      │
      └── products
            │
            ├── id              → BIGSERIAL
            ├── name            → TEXT
            ├── category        → TEXT
            ├── price           → NUMERIC
            ├── metadata        → JSONB
            │     │
            │     ├── brand
            │     ├── ram
            │     ├── storage
            │     ├── processor
            │     ├── camera
            │     └── features
            │
            └── created_at      → TIMESTAMPTZ`
                    }
                ],
                paragraphsAfter: [
                    `This structure demonstrates how stable information and flexible information can coexist in one PostgreSQL table.`
                ]
            },

            {
                heading: "7.4 Role of JSONB in PostgreSQL",
                paragraphs: [
                    `JSONB provides PostgreSQL with a way to store JSON documents in a form that PostgreSQL can process efficiently.`,
                    `Unlike storing JSON only as plain text, JSONB allows PostgreSQL to understand the internal structure of the document and provides operators and functions for working with its fields.`,
                    `JSONB supports objects, arrays, nested structures, strings, numbers, Boolean values and null values.`,
                    `This makes it suitable for semi-structured data where the exact set of properties can vary between records.`
                ]
            },

            {
                heading: "7.5 PostgreSQL as a Hybrid Database Solution",
                paragraphs: [
                    `One of the most important concepts demonstrated by this assignment is the hybrid data model.`,
                    `An application does not necessarily have to store every field as a traditional relational column or move all its data into a document database.`,
                    `PostgreSQL allows both approaches to be used together. Important fields can remain relational while flexible fields can be stored inside JSONB.`,
                    `For example, product id, name, category and price can remain normal columns, while product-specific specifications can be stored in metadata.`
                ],
                architecture: [
                    "Express.js Application",
                    "PostgreSQL SQL Layer",
                    "Relational Columns",
                    "+",
                    "JSONB Documents",
                    "Structured + Flexible Data"
                ]
            },

            {
                heading: "7.6 SQL and JSONB Working Together",
                paragraphs: [
                    `The assignment demonstrated that JSONB does not replace SQL. Instead, JSONB extends what PostgreSQL can represent and query.`,
                    `Normal SQL can be used for selecting rows, filtering relational columns, sorting, grouping and aggregation. JSONB operators and functions can then be used when the query needs to work with the contents of a JSON document.`,
                    `Both types of operations can be used inside the same SQL statement.`
                ],
                codeExamples: [
                    {
                        title: "SQL + JSONB together",
                        language: "sql",
                        code: `SELECT
    name,
    category,
    price,
    metadata ->> 'brand' AS brand,
    (metadata ->> 'ram')::INTEGER AS ram
FROM products
WHERE category = 'Laptop'
  AND metadata ? 'ram'
  AND (metadata ->> 'ram')::INTEGER >= 16
ORDER BY price DESC;`
                    }
                ],
                paragraphsAfter: [
                    `This query uses category and price as normal relational fields while using JSONB operations to retrieve and filter the RAM and brand information.`
                ]
            },

            {
                heading: "7.7 JSONB Compared with Traditional Columns",
                paragraphs: [
                    `Traditional relational columns are useful when the structure of the data is stable and important fields need strong constraints and predictable queries.`,
                    `JSONB becomes useful when some information is optional, nested or likely to vary between records.`,
                    `The two approaches do not have to be treated as alternatives. They can be combined according to the requirements of the application.`
                ],
                table: {
                    headers: [
                        "Requirement",
                        "Traditional Column",
                        "JSONB"
                    ],
                    rows: [
                        [
                            "Stable field",
                            "Suitable",
                            "Possible, but may not be necessary"
                        ],
                        [
                            "Frequently queried core field",
                            "Suitable",
                            "Possible with JSONB queries/indexes"
                        ],
                        [
                            "Optional property",
                            "May require schema design",
                            "Naturally represented inside JSONB"
                        ],
                        [
                            "Nested object",
                            "May require additional structure",
                            "Can be stored directly"
                        ],
                        [
                            "Array of values",
                            "May require another table",
                            "Can be stored as a JSONB array"
                        ],
                        [
                            "Relational constraint",
                            "Strong native support",
                            "Can be combined with relational columns"
                        ]
                    ]
                }
            },

            {
                heading: "7.8 JSONB Compared with MongoDB",
                paragraphs: [
                    `The comparison with MongoDB showed that both technologies can represent document-style data, but they are based on different database models.`,
                    `MongoDB is a document-oriented database where documents are the central data representation. PostgreSQL is a relational database where JSONB is one of the available data types.`,
                    `Therefore, PostgreSQL JSONB should not be described as PostgreSQL becoming MongoDB. Instead, it provides document-style storage and querying capabilities within PostgreSQL.`
                ],
                comparison: [
                    {
                        traditional:
                            "PostgreSQL is built around tables, rows, columns and SQL.",
                        jsonb:
                            "JSONB adds flexible document-style data inside that relational system."
                    },
                    {
                        traditional:
                            "MongoDB is built around collections and documents.",
                        jsonb:
                            "Documents are the primary data representation in MongoDB."
                    },
                    {
                        traditional:
                            "PostgreSQL provides native relational relationships and constraints.",
                        jsonb:
                            "MongoDB models relationships differently using documents, references and application-level design."
                    },
                    {
                        traditional:
                            "PostgreSQL JSONB is part of a relational database.",
                        jsonb:
                            "MongoDB is primarily a document-oriented database."
                    }
                ]
            },

            {
                heading: "7.9 Advantages Demonstrated by the Project",
                paragraphs: [
                    `The implementation demonstrated several practical benefits of using JSONB when flexible data is required alongside relational data.`
                ],
                bullets: [
                    "Structured and flexible data can be stored in the same table.",
                    "Different records can contain different JSON properties.",
                    "Nested objects can be stored directly.",
                    "Arrays can be stored inside JSONB documents.",
                    "JSONB data can be searched using SQL.",
                    "Specific JSON values can be extracted without retrieving the complete document for application-side processing.",
                    "JSONB properties can be updated without redesigning the entire table.",
                    "JSONB can be indexed for suitable query patterns.",
                    "Node.js and Express.js can work with PostgreSQL JSONB through the pg library.",
                    "An existing PostgreSQL application can introduce JSONB without moving all data to another database system."
                ]
            },

            {
                heading: "7.10 Limitations and Considerations",
                paragraphs: [
                    `Although JSONB is flexible, it should not automatically be used for every field in a database.`,
                    `Core business information that requires strong relational constraints, frequent joins or predictable structure may be easier to manage using normal relational columns and tables.`,
                    `JSONB can also make the structure of application data less explicit when too many unrelated properties are placed inside one document.`,
                    `Applications should therefore identify which fields are stable and important and which fields are flexible or evolving.`,
                    `The choice between PostgreSQL JSONB and a dedicated document database such as MongoDB should depend on the application's data model, relationships, query patterns, consistency requirements and operational needs.`
                ],
                highlight:
                    "JSONB provides flexibility, but good database design still requires deciding which data should remain relational and which data benefits from document-style storage."
            },

            {
                heading: "7.11 Practical Applications",
                paragraphs: [
                    `The concepts demonstrated in this project can be applied to several real-world application scenarios where structured and semi-structured data need to coexist.`
                ],
                bullets: [
                    "E-commerce product catalogs with different product specifications.",
                    "Student profiles containing optional academic or activity information.",
                    "User preference and application settings systems.",
                    "Dynamic forms where different forms contain different fields.",
                    "Content management systems with flexible metadata.",
                    "IoT applications storing variable sensor metadata.",
                    "API systems receiving structured and flexible JSON payloads.",
                    "Configuration management systems.",
                    "Applications that already use PostgreSQL but need document-style fields."
                ]
            },

            {
                heading: "7.12 Example: E-Commerce Application",
                paragraphs: [
                    `An e-commerce platform provides a simple example of why a hybrid model can be useful.`,
                    `Every product needs common information such as product id, name, category and price. These fields can be stored as relational columns.`,
                    `However, the specifications of different products can be very different. A laptop may have RAM, processor and storage information, while a smartphone may have battery, screen and camera information.`,
                    `Instead of creating separate columns for every possible specification, these variable properties can be stored inside JSONB.`
                ],
                codeExamples: [
                    {
                        title: "Laptop metadata",
                        language: "json",
                        code: `{
    "brand": "Lenovo",
    "ram": 16,
    "processor": "Intel Core i7",
    "storage": {
        "type": "SSD",
        "capacity": 512
    }
}`
                    },
                    {
                        title: "Smartphone metadata",
                        language: "json",
                        code: `{
    "brand": "Samsung",
    "battery": 5000,
    "screen": {
        "size": 6.7,
        "type": "AMOLED"
    },
    "camera": {
        "main": 50,
        "front": 12
    }
}`
                    }
                ],
                paragraphsAfter: [
                    `Both products can be stored in the same PostgreSQL products table even though their specifications are different.`
                ]
            },

            {
                heading: "7.13 Role of Node.js and Express.js",
                paragraphs: [
                    `The backend layer provides the connection between the application and PostgreSQL.`,
                    `Express.js can receive HTTP requests containing JSON data, while the pg library can execute SQL queries against PostgreSQL.`,
                    `This allows JSON received from a frontend application or API client to be stored inside a PostgreSQL JSONB column.`,
                    `The backend can also execute JSONB queries and return the results as JSON responses.`
                ],
                architecture: [
                    "Frontend / API Client",
                    "Express.js",
                    "Node.js + pg",
                    "PostgreSQL",
                    "Relational Data + JSONB"
                ]
            },

            {
                heading: "7.14 Complete Data Flow",
                paragraphs: [
                    `The complete flow of the project can be represented as follows.`
                ],
                codeExamples: [
                    {
                        title: "Application data flow",
                        language: "text",
                        code: `User / Frontend
       │
       ▼
JSON Request
       │
       ▼
Express.js API
       │
       ▼
Node.js + pg
       │
       ▼
SQL Query
       │
       ▼
PostgreSQL
       │
       ├── Relational Columns
       │
       └── JSONB Metadata
              │
              ├── Objects
              ├── Arrays
              └── Nested Values
       │
       ▼
Query Result
       │
       ▼
JSON Response`
                    }
                ]
            },

            {
                heading: "7.15 Main Learning Outcomes",
                paragraphs: [
                    `After completing this assignment, the following concepts have been demonstrated:`
                ],
                numberedList: [
                    "Understanding the difference between relational and document-style data.",
                    "Understanding the purpose of JSONB in PostgreSQL.",
                    "Creating a PostgreSQL table containing a JSONB column.",
                    "Inserting JSON documents into PostgreSQL.",
                    "Working with nested JSON objects and arrays.",
                    "Extracting JSON values using PostgreSQL operators.",
                    "Searching JSONB documents using containment and key-existence operators.",
                    "Updating JSONB documents using PostgreSQL functions.",
                    "Combining relational SQL conditions with JSONB conditions.",
                    "Connecting Node.js and Express.js with PostgreSQL.",
                    "Understanding the conceptual difference between PostgreSQL JSONB and MongoDB.",
                    "Identifying situations where a hybrid relational and JSONB design can be useful."
                ]
            },

            {
                heading: "7.16 Final Conclusion",
                paragraphs: [
                    `This assignment explored how JSONB can be used in PostgreSQL to store and process flexible, semi-structured data.`,
                    `The implementation demonstrated that PostgreSQL does not have to be limited to strictly fixed relational columns. A PostgreSQL table can contain normal relational fields together with a JSONB column capable of storing nested objects, arrays and different properties for different records.`,
                    `The JSONB data was inserted and queried using PostgreSQL SQL statements. Operators such as ->, ->>, #>, #>>, @>, ? and other JSONB functions demonstrated how individual values can be extracted, searched and modified.`,
                    `The project also showed how Node.js and Express.js can interact with PostgreSQL JSONB through parameterized queries and API routes.`,
                    `The comparison with MongoDB showed that both technologies can support document-style data, but their underlying database models are different. PostgreSQL remains a relational database with JSONB support, while MongoDB is primarily a document-oriented database.`,
                    `Therefore, PostgreSQL JSONB can be a useful approach when an application needs the structure and relational capabilities of PostgreSQL together with the flexibility of JSON documents.`
                ],
                highlight:
                    "Final conclusion: PostgreSQL JSONB provides a practical hybrid approach where relational SQL capabilities and flexible document-style data can be used together in one database."
            },

            {
                heading: "7.17 Final Project Summary",
                paragraphs: [
                    `The complete project can be summarized in one idea: use relational columns for stable and important business data, and use JSONB for flexible or evolving attributes when that design fits the application.`,
                    `This approach can reduce the need to introduce a separate document database for applications that only require some document-style data while already depending on PostgreSQL.`,
                    `However, JSONB is not a universal replacement for relational database design or for document databases. The appropriate approach depends on the structure and requirements of the application.`
                ],
                codeExamples: [
                    {
                        title: "Final concept",
                        language: "text",
                        code: `                 PostgreSQL
                     │
          ┌──────────┴──────────┐
          │                     │
   Relational Data          JSONB Data
          │                     │
   Tables / Columns       Objects / Arrays
          │                     │
   SQL / JOINs /          Flexible Fields
   Constraints            Nested Data
          │                     │
          └──────────┬──────────┘
                     │
              Hybrid Database
                     │
                     ▼
       Structured + Flexible Data`
                    }
                ]
            },

            {
                heading: "7.18 References",
                paragraphs: [
                    `The following official documentation sources can be used to support the concepts covered in this assignment.`
                ],
                bullets: [
                    "PostgreSQL JSON Types Documentation — PostgreSQL Official Documentation",
                    "PostgreSQL JSON Functions and Operators — PostgreSQL Official Documentation",
                    "PostgreSQL GIN Index Documentation — PostgreSQL Official Documentation",
                    "PostgreSQL CREATE TABLE and INSERT Documentation — PostgreSQL Official Documentation",
                    "node-postgres Documentation — PostgreSQL client for Node.js",
                    "MongoDB Documentation — MongoDB Official Documentation",
                    "MongoDB Data Modeling Documentation — MongoDB Official Documentation",
                    "MongoDB Transactions Documentation — MongoDB Official Documentation"
                ]
            }
        ],

        keyPoints: [
            "PostgreSQL can combine relational data with JSONB data in the same database.",
            "JSONB supports flexible, nested and semi-structured information.",
            "JSONB can store objects and arrays.",
            "PostgreSQL provides SQL operators and functions for querying JSONB.",
            "Relational columns can be used for stable and important business information.",
            "JSONB can be used for flexible or evolving attributes.",
            "Node.js and Express.js can interact with PostgreSQL JSONB through the pg library.",
            "PostgreSQL JSONB and MongoDB support document-style data through different database models.",
            "JSONB should complement good relational database design rather than automatically replace it.",
            "Database selection should depend on the application's data model, relationships, query patterns and requirements."
        ],

        takeaway: {
            title: "Final Takeaway",
            text:
                "PostgreSQL JSONB provides a hybrid database approach by combining the reliability and relational capabilities of PostgreSQL with the flexibility of JSON document storage. It can be especially useful when an application has stable relational data together with additional attributes that are nested, optional or likely to evolve."
        },

        nextStep: {
            title: "Assignment Completed",
            description:
                "The complete PostgreSQL + JSONB theory and implementation journey is now finished, from database setup and table creation to JSONB insertion, querying, comparison and final conclusions."
        },

        references: [
            {
                title: "PostgreSQL JSON Types",
                url: "https://www.postgresql.org/docs/current/datatype-json.html"
            },
            {
                title: "PostgreSQL JSON Functions and Operators",
                url: "https://www.postgresql.org/docs/current/functions-json.html"
            },
            {
                title: "PostgreSQL GIN Indexes",
                url: "https://www.postgresql.org/docs/current/gin.html"
            },
            {
                title: "PostgreSQL CREATE TABLE",
                url: "https://www.postgresql.org/docs/current/sql-createtable.html"
            },
            {
                title: "PostgreSQL INSERT",
                url: "https://www.postgresql.org/docs/current/sql-insert.html"
            },
            {
                title: "node-postgres",
                url: "https://node-postgres.com/"
            },
            {
                title: "MongoDB Documentation",
                url: "https://www.mongodb.com/docs/"
            },
            {
                title: "MongoDB Data Modeling",
                url: "https://www.mongodb.com/docs/manual/core/data-modeling-introduction/"
            }
        ]
    }
];

module.exports = steps;
module.exports = steps;
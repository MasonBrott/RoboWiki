from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')

# Create the DB
db = client['robowiki']

# Create Collections
users_collection = db['users']
pages_collection = db['pages']
revisions_collection = db['revisions']

# Create initial user
users_collection.insert_one({
    "username": "mason",
    "password": "777f796f96aefb2df86322ba878f4b3aa3f9b48f4856df26325b636d710f5867",
    "role": "admin"
})
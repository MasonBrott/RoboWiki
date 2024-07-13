from mongoengine import Document, fields

class Page(Document):
    title = fields.StringField(max_length=200, required=True)
    content = fields.StringField(required=True)
    created_at = fields.DateTimeField()
    updated_at = fields.DateTimeField()

    def __str__(self):
        return self.title
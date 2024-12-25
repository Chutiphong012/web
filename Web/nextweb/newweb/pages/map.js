export default function Map() {
    return (
      <div className="min-h-screen ">
        

        <h1 className="text-center text-2xl md:text-4xl font-bold py-4 px-4">
        แสดงตำแหน่งโรค
      </h1>
        <div className="bg-white p-5 mx-4 my-10 rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63035.99259847209!2d99.3558528!3d9.0865664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1733057608219!5m2!1sth!2sth"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    );
  }
  
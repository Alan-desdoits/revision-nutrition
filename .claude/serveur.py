"""Serveur local du site (port 8123), sans cache navigateur.

Même chose que `python -m http.server 8123`, mais chaque réponse demande au
navigateur de revérifier le fichier : une page rechargée montre toujours la
dernière version des HTML, CSS et JS.
"""
import http.server
import os

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))


class SansCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, must-revalidate")
        super().end_headers()


http.server.ThreadingHTTPServer(("", 8123), SansCache).serve_forever()

# pylint: skip-file
import pytest # type: ignore
from devops import app  # ajuste o import se o nome do seu arquivo for diferente

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_index(client):
    """Teste da rota index"""
    response = client.get("/")
    assert response.status_code == 200
    assert b'<!doctype html>' in response.data  # Verifica se o HTML padrão está na resposta

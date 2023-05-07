function loadContent(contentTitle, contentBody) {
  document.getElementById('contentModalLabel').innerText = contentTitle;
  document.getElementById('modalContent').innerHTML = contentBody;
  $('#contentModal').modal('show');
}

function loadVisualContent(visualNumber) {
  const content = [
    { title: 'Visual 1', body: '<p>Example content for Visual 1...</p>' },
    { title: 'Visual 2', body: '<p>Example content for Visual 2...</p>' },
    { title: 'Visual 3', body: '<p>Example content for Visual 2...</p>' },
    { title: 'Visual 4', body: '<p>Example content for Visual 2...</p>' },
    { title: 'Visual 5', body: '<p>Example content for Visual 2...</p>' },
    { title: 'Visual 6', body: '<p>Example content for Visual 2...</p>' },
    { title: 'Visual 7', body: '<p>Example content for Visual 2...</p>' },
    { title: 'Visual 8', body: '<p>Example content for Visual 2...</p>' }
  ];

  loadContent(content[visualNumber - 1].title, content[visualNumber - 1].body);
}

<script type="text/babel">
  function OurFirstComponent() {
    return (
      <h1>Hello, I am a React Component!</h1>
    );
  }
  const placeWeWantToPutComponent = document.getElementById('hook');
  ReactDOM.render(OurFirstComponent(), placeWeWantToPutComponent);
</script>

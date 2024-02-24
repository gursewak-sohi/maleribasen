 
 



document.addEventListener("alpine:init", () => {
  Alpine.data('exhibitionsComponent', () => ({
     // Exhibitions Data
      isLoadingExhibitions : false,
      exhibitions : [],
      currentRegion: 'ALL',
      fetchExhibitions() {
        this.isLoadingExhibitions = true,
        fetch(`https://www.maleribasen.dk/api/exhibitions.asp?region=${this.currentRegion}`)
            .then(response => response.json())
            .then(data => {
                // console.log("API Data:", data.exhibitions);
                 this.exhibitions = data.exhibitions;
            })
            .catch(error => {
                // this.conversations = [];
                console.error("Error fetching chat data:", error);
            })
            .finally(() => {
                this.isLoadingExhibitions = false
            });
        },
        switchRegion(region) {
            this.currentRegion = region;
            this.fetchExhibitions();
        },
  
   
   

      init() {
         // Initial fetch
        this.fetchExhibitions();
      }      
  }));
});


 

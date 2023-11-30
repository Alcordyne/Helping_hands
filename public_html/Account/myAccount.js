 function openTab(tabName) {
        var tabs = document.querySelectorAll('.tab-content');
        tabs.forEach(function(tab) {
            tab.style.display = 'none';
        });

        document.getElementById(tabName).style.display = 'grid';
    }

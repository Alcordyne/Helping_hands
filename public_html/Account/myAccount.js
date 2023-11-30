function openTab(tabName) {
        var tabs = document.querySelectorAll('.tab-content');
        tabs.forEach(function(tab) {
            tab.style.display = 'none';
        });

        var tabButtons = document.querySelectorAll('.tab');
        tabButtons.forEach(function(button) {
            button.classList.remove('active');
        });

        document.getElementById(tabName).style.display = 'grid';
        event.currentTarget.classList.add('active');
    }

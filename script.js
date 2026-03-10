   const flights = [
        { air: "Fly91", no: "IC 1301", loc: "Goa (GOX)", date: "08/03/2026", time: "00:35", belt: "3", status: "DELAYED", type: "arrivals" },
        { air: "IndiGo", no: "6E 1496", loc: "Ras Al Khaimah (RKT)", date: "08/03/2026", time: "20:45", belt: "10", status: "DELAYED", type: "arrivals" },
        { air: "Regional Express", no: "ZZ 3725", loc: "Bangkok (DMK)", date: "08/03/2026", time: "12:00", belt: "-", status: "DELAYED", type: "arrivals" },
        { air: "IndiGo", no: "6E 1422", loc: "Sharjah (SHJ)", date: "08/03/2026", time: "22:15", belt: "13", status: "DELAYED", type: "arrivals" },
        { air: "IndiGo", no: "6E 197", loc: "Raipur (RPR)", date: "08/03/2026", time: "12:21", belt: "5", status: "ARRIVED", type: "arrivals" },
        { air: "Vistara", no: "UK 812", loc: "Delhi (DEL)", date: "08/03/2026", time: "10:30", belt: "8", status: "ARRIVED", type: "arrivals" },
        { air: "Air India", no: "AI 502", loc: "Mumbai (BOM)", date: "08/03/2026", time: "14:45", belt: "2", status: "ON TIME", type: "arrivals" },
        { air: "Emirates", no: "EK 564", loc: "Dubai (DXB)", date: "08/03/2026", time: "09:15", belt: "11", status: "ARRIVED", type: "arrivals" },
        { air: "Air India", no: "AI 804", loc: "Mumbai (BOM)", date: "08/03/2026", time: "15:00", belt: "G12", status: "ON TIME", type: "departures" },
        { air: "IndiGo", no: "6E 2101", loc: "Jaipur (JAI)", date: "08/03/2026", time: "16:20", belt: "G05", status: "BOARDING", type: "departures" },
        { air: "Vistara", no: "UK 918", loc: "London (LHR)", date: "08/03/2026", time: "18:00", belt: "G22", status: "ON TIME", type: "departures" },
        { air: "Akasa Air", no: "QP 1342", loc: "Kochi (COK)", date: "08/03/2026", time: "15:55", belt: "G08", status: "DELAYED", type: "departures" },
        { air: "Singapore Airlines", no: "SQ 511", loc: "Singapore (SIN)", date: "08/03/2026", time: "23:05", belt: "G15", status: "ON TIME", type: "departures" },
        { air: "IndiGo", no: "6E 567", loc: "Chennai (MAA)", date: "08/03/2026", time: "17:30", belt: "G03", status: "GATE CLOSED", type: "departures" },    
        { air: "IndiGo", no: "6E 5301", loc: "Hyderabad (HYD)", date: "08/03/2026", time: "16:45", belt: "G21", status: "ON TIME", type: "departures" },
        { air: "Air India", no: "AI 763", loc: "Kolkata (CCU)", date: "08/03/2026", time: "17:30", belt: "G23", status: "ON TIME", type: "departures" },
        { air: "Star Air", no: "S5 122", loc: "Ahmedabad (AMD)", date: "08/03/2026", time: "18:15", belt: "G11", status: "ON TIME", type: "departures" },
        { air: "IndiGo", no: "6E 904", loc: "Chennai (MAA)", date: "08/03/2026", time: "19:00", belt: "G25", status: "DELAYED", type: "departures" },
        { air: "Vistara", no: "UK 841", loc: "Bengaluru (BLR)", date: "08/03/2026", time: "20:10", belt: "G09", status: "ON TIME", type: "departures" },
        { air: "SpiceJet", no: "SG 243", loc: "Pune (PNQ)", date: "08/03/2026", time: "21:30", belt: "G14", status: "ON TIME", type: "departures" },
        // Add these to your flights array
{ air: "IndiGo", no: "6E 5301", loc: "Hyderabad (HYD)", date: "08/03/2026", time: "16:45", belt: "G21", status: "FINAL CALL", type: "departures" },
{ air: "Air India", no: "AI 763", loc: "Kolkata (CCU)", date: "08/03/2026", time: "17:30", belt: "G23", status: "FINAL CALL", type: "departures" },

    ];

    const storeList = [
        { name: "Dufry Duty Free", type: "Shopping", loc: "Intl Departures", desc: "Premium perfumes, spirits, and luxury chocolates.", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800", img2: "https://images.unsplash.com/photo-1544441893-675973e30685?w=800", rate: "4.8" },
        { name: "Hamleys", type: "Shopping", loc: "Near Gate 22", desc: "The world's finest toy shop for kids of all ages.", img: "https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/11/full/1668146247-9423.jpg", img2: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800", rate: "4.9" },
        { name: "Hidesign", type: "Shopping", loc: "Zone A", desc: "Handcrafted sustainable leather bags and accessories.", img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800", img2: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800", rate: "4.5" },
        { name: "Forest Essentials", type: "Shopping", loc: "Beauty Aisle", desc: "Luxurious Ayurvedic skincare and organic wellness.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800", img2: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800", rate: "4.7" },
        { name: "Shoppers Stop", type: "Shopping", loc: "Retail Plaza", desc: "Wide range of international fashion brands.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800", img2: "https://images.unsplash.com/photo-1441984905746-903bbad10de2?w=800", rate: "4.2" },
        { name: "Bose Electronics", type: "Shopping", loc: "Near Gate 25", desc: "State-of-the-art audio gear and noise-canceling tech.", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800", img2: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800", rate: "4.8" },
        { name: "Tumi Luggage", type: "Shopping", loc: "Zone B", desc: "Premium luggage and business travel essentials.", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800", img2: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=800", rate: "4.6" },
        { name: "Relay", type: "Shopping", loc: "Zone A & B", desc: "Travel convenience store with books and magazines.", img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800", img2: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800", rate: "4.0" },
        { name: "FabIndia", type: "Shopping", loc: "Retail Plaza", desc: "Traditional Indian handloom clothing and decor.", img: "https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?w=800", img2: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=800", rate: "4.4" },
        { name: "Rare Rabbit", type: "Shopping", loc: "Zone C", desc: "Sophisticated menswear for the modern explorer.", img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800", img2: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=800", rate: "4.6" },
        { name: "Nykaa Luxe", type: "Shopping", loc: "Beauty Aisle", desc: "High-end luxury cosmetic and fragrance boutique.", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800", img2: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?w=800", rate: "4.5" },
        { name: "Swarovski", type: "Shopping", loc: "Near Gate 21", desc: "Elegant crystal jewelry, figurines, and gifts.", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800", img2: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800", rate: "4.7" },
        { name: "Sunglass Hut", type: "Shopping", loc: "Zone B", desc: "The latest curated collection of designer eyewear.", img: "https://images.unsplash.com/photo-1511499767390-a73359580bc1?w=800", img2: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800", rate: "4.3" },
        { name: "Accessorize", type: "Shopping", loc: "Zone A", desc: "Fashion-forward jewelry, bags, and accessories.", img: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=800", img2: "https://images.unsplash.com/photo-1512168203104-3910bc2bcd54?w=800", rate: "4.1" },
        { name: "Crossword Books", type: "Shopping", loc: "Retail Plaza", desc: "Extensive selection of bestsellers and stationery.", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800", img2: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800", rate: "4.6" },
        { name: "William Penn", type: "Shopping", loc: "Zone C", desc: "World-class writing instruments and corporate gifts.", img: "https://images.unsplash.com/photo-1585336139118-132f7f215b2e?w=800", img2: "https://images.unsplash.com/photo-1519336367661-eba9c1dfa5a9?w=800", rate: "4.4" },
        { name: "Montblanc", type: "Shopping", loc: "Near Gate 20", desc: "Timeless luxury pens, watches, and leather goods.", img: "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?w=800", img2: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800", rate: "4.9" },
        { name: "CaratLane", type: "Shopping", loc: "Retail Plaza", desc: "Beautifully crafted modern diamond jewelry.", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800", img2: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800", rate: "4.5" },
        { name: "Titan EyePlus", type: "Shopping", loc: "Zone B", desc: "Expert eye care and stylish optical frames.", img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800", img2: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800", rate: "4.3" },
        { name: "Zivame", type: "Shopping", loc: "Retail Plaza", desc: "Premium intimate wear and fashionable activewear.", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800", img2: "https://images.unsplash.com/photo-1582533031735-3037452d377b?w=800", rate: "4.1" },
        { name: "Smoor Chocolates", type: "Food", loc: "Zone A", desc: "Exquisite couverture chocolates and patisserie.", img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800", img2: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=800", rate: "4.8" },
        { name: "Starbucks", type: "Food", loc: "Near Gate 24", desc: "Global coffeehouse serving signature brews.", img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800", img2: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=800", rate: "4.7" },
        { name: "Hard Rock Cafe", type: "Food", loc: "Dining Level", desc: "Classic American burgers and upbeat music vibes.", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800", img2: "https://images.unsplash.com/photo-1521017432531-fbd92d744264?w=800", rate: "4.6" },
        { name: "Hatti Kaapi", type: "Food", loc: "Zone B", desc: "Authentic South Indian filter coffee and idlis.", img: "https://images.unsplash.com/photo-1594910411242-7067f9037c68?w=800", img2: "https://images.unsplash.com/photo-1593967858208-67ddb5b4c426?w=800", rate: "4.5" },
        { name: "Buffalo Wild Wings", type: "Food", loc: "Dining Level", desc: "Sports bar serving wings and casual favorites.", img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800", img2: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800", rate: "4.4" },
        { name: "Chai Point", type: "Food", loc: "Near Gate 26", desc: "Traditional Indian tea and healthy snacks.", img: "https://images.unsplash.com/photo-1544787210-2213d2429f77?w=800", img2: "https://images.unsplash.com/photo-1563911191280-79831fedee4c?w=800", rate: "4.2" },
        { name: "KFC", type: "Food", loc: "Food Court", desc: "World-famous secret recipe fried chicken.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800", img2: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800", rate: "4.0" },
        { name: "Subway", type: "Food", loc: "Food Court", desc: "Freshly made subs, salads, and wraps.", img: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=800", img2: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800", rate: "4.1" },
        { name: "Pizza Hut", type: "Food", loc: "Food Court", desc: "Classic pan pizzas and cheesy sides.", img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800", img2: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800", rate: "3.9" },
        { name: "Third Wave Coffee", type: "Food", loc: "Zone C", desc: "Specialty coffee roasters and artisan snacks.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800", img2: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800", rate: "4.7" },
        { name: "Krispy Kreme", type: "Food", loc: "Near Gate 23", desc: "Original glazed donuts and sweet treats.", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800", img2: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=800", rate: "4.5" },
        { name: "Burger King", type: "Food", loc: "Food Court", desc: "Home of the Whopper and flame-grilled burgers.", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800", img2: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800", rate: "4.0" },
        { name: "Cafe Coffee Day", type: "Food", loc: "Zone A", desc: "Popular cafe for quick bites and hot coffee.", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800", img2: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800", rate: "3.8" },
        { name: "Baskin Robbins", type: "Food", loc: "Food Court", desc: "Delicious ice cream with 31 global flavors.", img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800", img2: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=800", rate: "4.3" },
        { name: "Social", type: "Food", loc: "Dining Level", desc: "Vibrant workspace and bar serving urban food.", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800", img2: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800", rate: "4.6" },
        { name: "Copper Chimney", type: "Food", loc: "Dining Level", desc: "Award-winning North Indian tandoori dishes.", img: "https://images.unsplash.com/photo-1585937421612-71100520a320?w=800", img2: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800", rate: "4.5" },
        { name: "Street Foods of India", type: "Food", loc: "Food Court", desc: "Indian street snacks from across the country.", img: "https://images.unsplash.com/photo-1601050690597-df056fb04791?w=800", img2: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800", rate: "4.2" },
        { name: "Vaishali Express", type: "Food", loc: "Zone B", desc: "Iconic South Indian snacks and beverages.", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800", img2: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=800", rate: "4.4" },
        { name: "Olio Pizza", type: "Food", loc: "Food Court", desc: "Authentic wood-fired sourdough pizzas.", img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=800", img2: "https://images.unsplash.com/photo-1574123853684-c1ec63d0016e?w=800", rate: "4.1" },
        { name: "Wow! Momo", type: "Food", loc: "Food Court", desc: "Hand-crafted momos in dozens of varieties.", img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=800", img2: "https://images.unsplash.com/photo-1534422298391-e4f8c170db0a?w=800", rate: "4.0" }
    ];

    let currentFlightType = 'arrivals';

    function handleLogin() {
        if(document.getElementById('user').value.toLowerCase() === 'admin' && document.getElementById('pass').value === '1234') {
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('mainNav').style.display = 'flex';
            showPage('home'); renderMap();
        } else { showToast("Wrong login! Use Admin / 1234"); }
    }

    function toggleFlights(type) {
        currentFlightType = type;
        document.getElementById('locHeader').textContent = type === 'arrivals' ? 'ORIGIN' : 'DESTINATION';
        document.getElementById('beltHeader').textContent = type === 'arrivals' ? 'BELT NO.' : 'GATE';
        document.getElementById('arrBtn').style.background = type === 'arrivals' ? 'var(--dark-blue)' : '#ddd';
        document.getElementById('arrBtn').style.color = type === 'arrivals' ? 'white' : 'black';
        document.getElementById('depBtn').style.background = type === 'departures' ? 'var(--dark-blue)' : '#ddd';
        document.getElementById('depBtn').style.color = type === 'departures' ? 'white' : 'black';
        renderFlights();
    }

    function renderFlights() {
    const query = document.getElementById('fSearch').value.toLowerCase();
    const rows = flights.filter(f => 
        f.type === currentFlightType && 
        (f.air.toLowerCase().includes(query) || f.no.toLowerCase().includes(query) || f.loc.toLowerCase().includes(query))
    );

    document.getElementById('flightRows').innerHTML = rows.map(f => {
        // --- ADD THIS LOGIC HERE ---
        let statusClass = "status-tag"; 
        let statusColor = "var(--primary)"; // Default Blue

        if (f.status === 'DELAYED') {
            statusColor = "var(--danger)";
        } else if (f.status === 'BOARDING') {
            statusColor = "var(--warning)";
        } else if (f.status === 'FINAL CALL') {
            statusClass += " status-final-call"; // This adds the flashing animation
            statusColor = "white"; // White text on red background
        }
        // ---------------------------

        return `<tr>
            <td style="font-weight:700">${f.air}</td>
            <td>${f.no}</td>
            <td>${f.loc}</td>
            <td>${f.date}</td>
            <td>${f.time}</td>
            <td>${f.belt}</td>
            <td><span class="${statusClass}" style="color:${statusColor}">${f.status}</span></td>
        </tr>`;
    }).join('');
}

    function renderMap() {
        const grid = document.getElementById('mapGrid');
        grid.innerHTML = '';

        // 1. Top Section: Entry Gates
        for(let i=1; i<=6; i++) {
            grid.innerHTML += `<div class="map-node">ENTRY ${i}</div>`;
        }
        
        // 2. Large Block: Check-in
        grid.innerHTML += `<div class="map-node node-wide">Check-in Island A-F</div>`;
        
        // 3. The Store Section + Facilities
        storeList.forEach((s, index) => {
            const storeId = s.name.replace(/\s+/g, '-').toLowerCase();
            
            // Hallway Labels
            if(index === 0) grid.innerHTML += `<div class="map-hallway-label">North Concourse</div>`;
            if(index === 12) grid.innerHTML += `<div class="map-hallway-label">Central Shopping Plaza</div>`;
            if(index === 25) grid.innerHTML += `<div class="map-hallway-label">South Concourse & Food Court</div>`;

            // Security and Lounges
            if(index === 8) grid.innerHTML += `<div class="map-node node-wide">SECURITY & IMMIGRATION</div>`;
            
            // --- NEW: WASHROOM 1 (North) ---
            if(index === 4) {
                grid.innerHTML += `<div id="map-node-washroom-north" class="map-node" style="background:#e0f2fe !important; border:2px solid #3b82f6">🚻 Washroom (N)</div>`;
            }

            if(index === 16) grid.innerHTML += `<div class="map-node node-lounge">080 Luxury Lounge</div>`;

            // --- NEW: BABY CARE ROOM ---
            if(index === 18) {
                grid.innerHTML += `<div id="map-node-baby-care" class="map-node" style="background:#fdf2f8 !important; border:2px solid #db2777">🍼 Baby Care</div>`;
            }

            if(index === 24) grid.innerHTML += `<div class="map-node node-lounge" style="background:#e0f2fe !important">Duty Free Central Plaza</div>`;

            // --- NEW: WASHROOM 2 (South) ---
            if(index === 28) {
                grid.innerHTML += `<div id="map-node-washroom-south" class="map-node" style="background:#e0f2fe !important; border:2px solid #3b82f6">🚻 Washroom (S)</div>`;
            }

            // The actual stores
            grid.innerHTML += `
                <div id="map-node-${storeId}" class="map-node node-store" onclick="showToast('Locating ${s.name}...')">
                    ${s.name}
                </div>`;
        });

        // 4. Bottom Section: Boarding Gates
        for(let i=20; i<=27; i++) {
            grid.innerHTML += `<div class="map-node node-gate" onclick="showToast('Gate ${i}')">GATE ${i}</div>`;
        }
    }

    /* UPDATED: SMART PATHFINDING DIRECTION */
   /* UPDATED: SMART PATHFINDING DIRECTION */
    function navigateToStore(storeName) {
        showPage('map'); 
        
        // 1. Reset highlights and clear path
        document.querySelectorAll('.map-node').forEach(node => node.classList.remove('map-highlight'));
        const guidePath = document.getElementById('guidePath');
        if(guidePath) guidePath.setAttribute('d', '');

        // 2. Locate Start and Destination
        const startNode = document.querySelectorAll('.map-node')[0]; // Entry 1
        const storeId = storeName.replace(/\s+/g, '-').toLowerCase();
        const endNode = document.getElementById(`map-node-${storeId}`);

        if(endNode && startNode) {
            endNode.classList.add('map-highlight');
            
            // 3. Draw path after UI transition
           setTimeout(() => {
                const container = document.querySelector('.map-container').getBoundingClientRect();
                const startRect = startNode.getBoundingClientRect();
                const endRect = endNode.getBoundingClientRect();

                const x1 = (startRect.left + startRect.width / 2) - container.left;
                const y1 = (startRect.top + startRect.height / 2) - container.top;
                const x2 = (endRect.left + endRect.width / 2) - container.left;
                const y2 = (endRect.top + endRect.height / 2) - container.top;

                const pathData = `M ${x1} ${y1} L ${x1} ${y1 + 60} L ${x2} ${y1 + 60} L ${x2} ${y2}`;
                
                if(guidePath) {
                    guidePath.setAttribute('d', pathData);
                }

                // --- ADD THIS PART FOR THE RED DOT ---
                let dot = document.getElementById('userDot');
                if(!dot) {
                    dot = document.createElement('div');
                    dot.id = 'userDot';
                    dot.className = 'user-location-dot';
                    document.querySelector('.map-container').appendChild(dot);
                }
                dot.style.left = `${x1 - 6}px`; 
                dot.style.top = `${y1 - 6}px`;
                // -------------------------------------
                
                endNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
                showToast(`Path to ${storeName} generated!`);
            }, 600);
        }
    }

    function filterStores(type, btn) {
        if(btn) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
        const filtered = type === 'all' ? storeList : storeList.filter(s => s.type === type);
        document.getElementById('storeGrid').innerHTML = filtered.map((s, index) => {
            const originalIndex = storeList.indexOf(s);
            return `
            <div class="store-card" onclick="openStoreDetails(${originalIndex})">
                <div class="store-img" style="background-image:url('${s.img}')"></div>
                <div style="padding:15px">
                    <span style="font-size:0.7rem; color:var(--gold); font-weight:700">${s.type}</span>
                    <h3>${s.name}</h3>
                    <p style="font-size:0.7rem; color:#888; margin-top:5px">View Details & Pictures →</p>
                </div>
            </div>`;
        }).join('');
    }

    function openStoreDetails(index) {
        const s = storeList[index];
        const content = `
            <div style="padding: 20px 5%; background:white; border-bottom:1px solid #eee;">
                <span onclick="showPage('terminal')" style="cursor:pointer; color:var(--primary); font-weight:700;">← BACK TO ALL STORES</span>
            </div>
            <div class="detail-hero" style="background-image:url('${s.img}')">
                <div class="detail-content">
                    <span style="color:var(--gold); font-weight:700; text-transform:uppercase">${s.type}</span>
                    <h1 style="font-size:3rem; font-family:'Playfair Display'; margin:10px 0">${s.name}</h1>
                    <div style="display:flex; gap:15px; font-weight:600">
                        <span>📍 ${s.loc}</span>
                        <span>⭐ ${s.rate}/5.0</span>
                    </div>
                </div>
            </div>
            <div class="detail-body">
                <h2 style="color:var(--primary); margin-bottom:15px">About the Store</h2>
                <p style="font-size:1.1rem; line-height:1.6; color:#444">${s.desc}</p>
                <div class="gallery-grid">
                    <div class="gallery-item" style="background-image:url('${s.img}')"></div>
                    <div class="gallery-item" style="background-image:url('${s.img2}')"></div>
                </div>
                <div style="margin-top:40px; display:flex; gap:10px">
                    <button class="btn-kiosk" style="width:200px" onclick="navigateToStore('${s.name}')">Get Directions</button>
                    <button class="btn-kiosk" style="width:200px; background:#eee; color:#333" onclick="showToast('Offer Applied!')">Claim Coupon</button>
                </div>
            </div>
        `;
        document.getElementById('storeDetailContent').innerHTML = content;
        showPage('storeDetails');
    }

    const destinations = ["Jaipur (JAI)", "Mumbai (BOM)", "Delhi (DEL)", "Goa (GOX)", "London (LHR)", "Dubai (DXB)"];
    
    document.addEventListener('DOMContentLoaded', () => {
        const input = document.getElementById('kDest');
        const suggBox = document.getElementById('suggestions');
        if(input) {
            input.addEventListener('input', () => {
                const val = input.value.toLowerCase();
                suggBox.innerHTML = '';
                if(!val) { suggBox.style.display = 'none'; return; }
                destinations.filter(d => d.toLowerCase().includes(val)).forEach(m => {
                    const div = document.createElement('div');
                    div.className = 'suggestion-item'; div.textContent = m;
                    div.onclick = () => { input.value = m; suggBox.style.display = 'none'; };
                    suggBox.appendChild(div);
                });
                suggBox.style.display = 'block';
            });
        }
    });

    function kioskSearch() {
        const dest = document.getElementById('kDest').value;
        const dateVal = document.getElementById('kDate').value;
        if(!dest || !dateVal) return showToast("Please select destination and date");
        document.getElementById('kioskStep1').style.display = 'none';
        document.getElementById('kioskStep2').style.display = 'block';
        const diffDays = Math.ceil((new Date(dateVal) - new Date()) / (1000 * 60 * 60 * 24));
        let scarcity = { tag: 'tag-plenty', text: '40+ Seats', priceMult: 1 };
        if(diffDays <= 2) scarcity = { tag: 'tag-urgent', text: 'LAST 2 SEATS!', priceMult: 1.8 };
        else if(diffDays <= 7) scarcity = { tag: 'tag-ok', text: '6 seats left', priceMult: 1.3 };
        const baseFlights = [{ b: "IndiGo", p: 4200 }, { b: "Air India", p: 5500 }, { b: "Vistara", p: 6200 }];
        let html = '';
        baseFlights.forEach(f => {
            let finalP = Math.round(f.p * scarcity.priceMult);
            html += `<div class="input-cell" style="display:flex; justify-content:space-between; margin-bottom:12px; cursor:pointer" onclick="confirmK('${f.b}', ${finalP}, '${dest}')"><div><strong>${f.b}</strong><br><span class="scarcity-tag ${scarcity.tag}">${scarcity.text}</span></div><div><strong>₹${finalP}</strong></div></div>`;
        });
        document.getElementById('flightResults').innerHTML = html;
    }

    let kState = { pax: 1, seniors: 0 };
    function renderKPax() {
        kState.pax = document.getElementById('kPax').value;
        let h = '';
        for(let i=1; i<=kState.pax; i++) h += `<div class="input-cell" style="margin-bottom:10px"><label>Pax ${i} Age</label><input type="number" class="kp-age" onchange="calcKDisc()"></div>`;
        document.getElementById('paxInputs').innerHTML = h;
    }
    function calcKDisc() {
        kState.seniors = 0;
        document.querySelectorAll('.kp-age').forEach(i => { if(i.value >= 60) kState.seniors++; });
    }
    function confirmK(brand, price, dest) {
        let total = (price * kState.pax) - (kState.seniors * (price * 0.10));
        document.getElementById('kSummary').innerHTML = `Flight: ${brand} to ${dest}<br>Passengers: ${kState.pax}<br><strong>Total: ₹${Math.round(total)}</strong>`;
        document.getElementById('kioskStep2').style.display = 'none';
        document.getElementById('kioskStep3').style.display = 'block';
    }

    function resetKiosk() {
        document.getElementById('kDest').value = '';
        document.getElementById('kDate').value = '';
        document.getElementById('paxInputs').innerHTML = '';
        document.getElementById('kPax').value = 1;
        document.getElementById('kioskStep3').style.display = 'none';
        document.getElementById('kioskStep1').style.display = 'block';
        showToast("Ready for next booking!");
    }

    /* UPDATED: SHOWPAGE WITH PATH CLEARING */
    function showPage(id) { 
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page')); 
        document.getElementById(id).classList.add('active-page'); 
        
        // Clear old paths when leaving the map page
        if(id !== 'map') {
            const path = document.getElementById('guidePath');
            if(path) path.setAttribute('d', '');
        }

        if(id === 'terminal') filterStores('all');
        if(id === 'liveFlights') renderFlights();
        window.scrollTo(0,0);
    }

    function showToast(msg) { const t = document.getElementById('customToast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000); }
    function kioskBack(s) { document.getElementById('kioskStep1').style.display = 'block'; document.getElementById('kioskStep2').style.display = 'none'; }
    
    renderKPax();
    function clearMapPath() {
    // 1. Remove the gold line
    const path = document.getElementById('guidePath');
    if(path) path.setAttribute('d', '');

    // 2. Remove the pulsing highlight from any store
    document.querySelectorAll('.map-node').forEach(node => {
        node.classList.remove('map-highlight');
    });

    // 3. Remove the "You Are Here" dot
    const dot = document.getElementById('userDot');
    if(dot) dot.remove();

    showToast("Map cleared!");
}
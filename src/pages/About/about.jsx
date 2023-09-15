import TawToChat from "../contact/TawkToChat.jsx";
import Typography from "@mui/joy/Typography";

function About() {

    return (
        <div>
            <div>
                <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px' }}>
                    <h1>E Shop</h1>
                    <p>Your Source for Sri Lankan Spices</p>
                </header>
                <div style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' ,borderRadius: 4}}>
                    <h2>About Us</h2>
                    <p>E Shop is an innovative and customer-centric e-commerce platform specializing in the distribution of high-quality spice products manufactured in the heart of Sri Lanka. Our mission is to bring the rich and authentic flavors of Sri Lankan spices to every household in the country, while also providing a convenient and user-friendly online shopping experience.</p>

                    <h2>Our Products</h2>
                    <ul>
                        <li>Ceylon Cinnamon: Renowned for its sweet and aromatic flavor...</li>
                        <li>Spice Blends: Explore the world of Sri Lankan spice blends...</li>
                        <li>Chili Varieties: From mild to fiery hot, our collection of chili peppers...</li>
                        <li>Turmeric: Known for its health benefits, our premium turmeric powder...</li>
                        <li>Pepper: Discover the bold and robust flavors of Sri Lankan black pepper...</li>
                        <li>Spice Accessories: We also offer a variety of spice-related accessories...</li>
                    </ul>

                    <h2>Why Choose E Shop?</h2>
                    <ol>
                        <li>Authenticity: Our products are sourced directly from local Sri Lankan spice producers...</li>
                        <li>Convenience: With E Shop, you can shop for your favorite spices from the comfort of your home...</li>
                        <li>Quality Assurance: We adhere to the highest quality standards...</li>
                        <li>Nationwide Distribution: E Shop is committed to delivering our products to every corner of Sri Lanka...</li>
                        <li>Customer Support: Our dedicated customer support team is always ready to assist you...</li>
                    </ol>

                    <h2>Our Vision</h2>
                    <p>E Shop envisions a future where the flavors of Sri Lankan spices are cherished not only within the country but also around the world. We aim to become a global ambassador for Sri Lankan cuisine, promoting its unique and diverse flavors on an international scale.</p>
                </div>
            </div>
            <TawToChat/>
        </div>
    )
}

export default About

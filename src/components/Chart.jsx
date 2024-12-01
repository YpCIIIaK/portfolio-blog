import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

const Chart = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {
        const width = 600;
        const height = 400;

        // Prepare root data
        const root = d3.hierarchy(data);
        const links = root.links();
        const nodes = root.descendants();

        // Create a simulation
        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id).distance(50).strength(1))
            .force("charge", d3.forceManyBody().strength(-100))
            .force("center", d3.forceCenter(0, 0));

        // Select SVG
        const svg = d3.select(svgRef.current)
            .attr("viewBox", [-width / 2, -height / 2, width, height])
            .attr("style", "max-width: 100%; height: auto;");

        // Add links
        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(links)
            .join("line");

        // Add nodes
        const node = svg.append("g")
            .attr("fill", "#fff")
            .selectAll("circle")
            .data(nodes)
            .join("circle")
            .attr("r", 5)
            .attr("fill", d => (d.children ? "#69b3a2" : "#ff5722"))
            .call(drag(simulation));

        // Add node titles (tooltips)
        node.append("title").text(d => d.data.name);

        // Add labels to nodes
        svg.append("g")
            .selectAll("text")
            .data(nodes)
            .join("text")
            .attr("x", d => d.x)
            .attr("y", d => d.y)
            .attr("dy", -10)  // Offset the text above the node
            .attr("text-anchor", "middle")
            .attr("font-size", "10px")
            .attr("fill", "#FFFFFF")
            .text(d => d.data.name);  // Display the name of the node

        // Add tick function to update positions
        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);

            svg.selectAll("text")
                .attr("x", d => d.x)
                .attr("y", d => d.y);  // Ensure text stays at the node position
        });

        // Drag functionality for the nodes
        function drag(simulation) {
            function dragstarted(event, d) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(event, d) {
                d.fx = event.x;
                d.fy = event.y;
            }

            function dragended(event, d) {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }

            return d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
        }

        return () => {
            simulation.stop();
            svg.selectAll("*").remove();
        };
    }, [data]);

    return <svg ref={svgRef}></svg>;
};

export default Chart;

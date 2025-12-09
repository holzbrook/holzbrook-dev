import {
  WorkResearchId,
  type WorkResearch,
  ResearchStatus,
} from '@/lib/domain/work/research/WorkResearch';

export const researchById: Record<WorkResearchId, WorkResearch> = {
  [WorkResearchId.ComputationalFramework]: {
    id: WorkResearchId.ComputationalFramework,
    title: 'The two hard things…',
    subtitle: 'What if after all this time, the "two hard things" in computer science... are actually the same problem?',
    description:
      'A framework that treats semantic paths as executable computational units, simplifying state management, cache invalidation, and deployment across local and distributed systems through event-sourced, immutable execution.',
    intro: [
      'The classic joke: "There are only two hard problems in computer science: cache invalidation, naming things, and off-by-one errors."',
      'This framework addresses the first two by recognizing they\'re the same problem — both fundamentally about organizing and tracking relationships between computational units. Semantic paths provide unified naming; path dependencies enable exact cache invalidation.',
      'As for off-by-one errors? Still working on that one. (At least we got the count right.)',
    ],
    githubUrl: 'https://github.com/holzbrook/fractal-semantic-paths',
    status: ResearchStatus.Research,
    disclosureDate: '2025-12-03',
    concepts: [
      {
        title: 'Semantic Path Addressing',
        description:
          'The framework uses semantic paths (e.g., `/user/profile/name`, `/number/counter`) as fundamental units of execution, not just data locations. Functions, values, constraints, and state are all addressable through a unified path-based registry system.',
        details: [
          'Paths serve as both data addresses and function definitions, unifying the execution model',
          'File-system-like hierarchical organization with compositional inheritance and granular path-level overrides (similar to file aliases)',
          'All data structures are addressable and bound directly to the path registry',
        ],
      },
      {
        title: 'Constraint and Diff Parameters',
        description:
          'The framework introduces constraint parameters and diff parameters that express constraints and state changes as part of the path/execution model. Value constraints (min/max, validation rules) are declared directly in path definitions, enabling declarative state management and automatic validation.',
        details: [
          'Value constraints (min, max, validation rules) declared directly in path definitions',
          'Constraint params express conditions and requirements declaratively; diff params capture state transitions immutably',
          'Unifies pure functional computation with stateful effects — developers write both pure functions and stateful operations, and the framework blends them seamlessly',
        ],
      },
      {
        title: 'Automatic State Management',
        description:
          'State management is automatically derived from structural code relationships. The framework enforces strict DAG (Directed Acyclic Graph) dependencies, enabling exact cache invalidation and deterministic execution. Functions are memoizable with results cacheable across async boundaries, and the exact invalidation system supports precomputation of hot paths for performance optimization.',
        details: [
          'Dependency tracking through path relationships enables automatic topological sorting for correct execution order',
          'Exact cache invalidation: when a path changes, only dependent paths are invalidated. This supports precomputation of hot paths through path-based addressing',
          'No manual state management code required. All state is declared in paths; all rendered state is derived from path values and diffs',
          'Memoizable functions with cross-boundary caching support',
        ],
      },
      {
        title: 'Event-Sourced Execution Model',
        description:
          'The framework does not rely on traditional function closures; instead, each executable unit is represented as a standalone event, enabling deterministic replay and eliminating hidden state. The system is fully event-sourced and immutable, yet naturally expresses stateful changes through event composition.',
        details: [
          'Each executable unit is a standalone event with complete provenance, enabling full replay capability for debugging and audit trails',
          'Deterministic rollup ensures state consistency across clients and servers',
          'Events are immutable by design; application logic remains stateful through event composition',
        ],
      },
      {
        title: 'Wire Protocol as Execution Target',
        description:
          'Rather than compiling to machine instructions, the framework targets "the wire" — generating a protocol-level representation that can execute anywhere. At deployment time, the framework analyzes all application instructions, performs topological sorting, and uses path-based hashing for sharding and distribution.',
        details: [
          'Execution target is protocol/data format, not CPU instructions',
          'The same application code runs locally or in distributed deployments without network-specific glue code',
          'Deployment-time analysis performs topological sorting and applies path-based distribution strategies. Path-based addressing enables application instruction diffs and version-based routing',
          'Supports automated construction of distributed execution topologies using path-level analysis. Protocol-based design supports framework-agnostic execution',
        ],
      },
    ],
    technicalDomains: [
      'Domain-Driven Design',
      'Event Sourcing',
      'Functional Programming',
      'Distributed Systems',
      'State Management',
      'Cache Optimization',
    ],
    keyInnovations: [
      'Semantic path addressing as fundamental computational unit',
      'Automatic state management derived from code structure',
      'Exact cache invalidation through path dependency DAG',
      'Memoizable functions with cross-boundary caching',
      'Precomputation of hot paths',
      'Constraint and diff parameters for declarative state transitions',
      'Event-sourced execution with deterministic rollup',
      'Wire protocol execution target for unified local and distributed execution',
      'Compositional inheritance with path-level granular overrides',
    ],
    potentialApplications: [
      'Real-time collaborative applications requiring full auditability',
      'Financial systems needing complete transaction replayability',
      'IoT and edge computing with event-driven architectures',
      'Game engines requiring deterministic state management',
      'Configuration management systems with dependency tracking',
      'Data pipelines and ETL processes needing exact cache invalidation',
      'Distributed applications that need to scale from local to cloud',
    ],
    developmentHistory:
      'Development began in May 2025. The framework is implemented in Rust and has undergone extensive experimentation and refinement through multiple architectural iterations.',
    notes:
      'This disclosure presents high-level architectural concepts of a potentially patentable computational framework. The combination of semantic path addressing, automatic dependency-derived state management, and exact cache invalidation represents a novel approach to building scalable, auditable applications. Detailed implementation algorithms and specific optimization techniques are not disclosed in this public documentation.',
  },
};


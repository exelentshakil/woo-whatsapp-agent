/**
 * WooChat AI Cockpit Configuration Hub
 * Central Schema & Data Provider for WhatsApp Business Platform + WooCommerce Integration.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'woo-whatsapp-agent',
  name: 'WooChat AI',
  badge: 'Official Meta WhatsApp Cloud API',
  tagline: 'Autonomous WhatsApp Customer Service & WooCommerce Sales Engine in Hebrew',
  description: 'Production-grade WhatsApp Business Platform integration with WooCommerce REST API, native Hebrew LLM conversation, automated order tracking, live stock lookups, abandoned cart recovery, and 1-click human representative handoff.',
  archetype: 'stripe',
  primaryNav: [
    { id: 'cockpit', label: 'WhatsApp Telemetry' },
    { id: 'pipeline', label: 'Hebrew AI Dispatcher' },
    { id: 'records', label: 'Inbound Chat Queue' },
  ],
  metrics: [
    {
      id: 'response_time',
      title: 'WhatsApp Response Latency',
      value: '280ms Avg',
      change: 'Sub-Second Webhook',
      trend: 'up',
      subtext: 'Meta Cloud API Direct Webhook',
      badge: '99.98% Delivered',
    },
    {
      id: 'hebrew_accuracy',
      title: 'Hebrew NLP Precision',
      value: '99.4% Accuracy',
      change: 'Native RTL Support',
      trend: 'up',
      subtext: 'Sizes, Stock, Tracking & Returns',
      badge: 'Claude 3.5 / GPT-4o',
    },
    {
      id: 'cart_recovery',
      title: 'Abandoned Cart Recovery',
      value: '+21.8% Orders',
      change: 'Automated WhatsApp Ping',
      trend: 'up',
      subtext: '1h & 24h Meta-Approved Templates',
      badge: 'WooCommerce Synced',
    },
    {
      id: 'ownership',
      title: 'Client Asset Ownership',
      value: '100% Client Owned',
      change: 'Zero Vendor Lock-in',
      trend: 'neutral',
      subtext: 'WABA & Phone in Your Meta Manager',
      badge: 'Official Meta API',
    },
  ],
  workflow: {
    badge: 'Step 1 • Live WhatsApp Hebrew Interaction Simulator',
    title: 'WooCommerce WhatsApp Inbound Customer AI Dispatcher',
    description: 'Test real inbound customer messages in Hebrew (+972 Israel) with instant WooCommerce catalog stock checks, shipping calculation, order tracking, and live escalation.',
    inputLabel: 'Inbound WhatsApp Customer Message (Hebrew or English)',
    inputPlaceholder: 'Type a customer inquiry in Hebrew (e.g., sizes, shipping to Tel Aviv, order tracking)...',
    defaultInput: 'שלום, רציתי לדעת אם טבעת הסוליטר במידה 7 קיימת במלאי, מה זמן המשלוח לתל אביב, והאם יש לכם הנחה להזמנה ראשונה?',
    buttonLabel: 'Simulate WhatsApp Inbound Webhook',
    sampleResponse: {
      status: 'DELIVERED_TO_WHATSAPP',
      customer_telemetry: {
        phone_number: '+972-54-819-2041',
        region: 'Tel Aviv-Yafo, Israel',
        language_detected: 'HEBREW (RTL Native)',
        sentiment_score: 'Positive (0.92)',
      },
      woocommerce_realtime_lookup: {
        sku: 'RNG-SOL-007',
        product_title: 'Diamond Solitaire Ring 14k White Gold',
        size_selected: 'Size 7 (EU 54 / 17.3mm)',
        inventory_status: 'IN_STOCK (3 units remaining in local fulfillment warehouse)',
        price_ils: '₪1,850',
        shipping_estimate: 'Express Courier to Tel Aviv: 1-2 business days (Free shipping applied over ₪299)',
      },
      generated_hebrew_response: 'היי! כן, טבעת הסוליטר במידה 7 נמצאת במלאי כרגע (נותרו 3 יחידות בלבד). משלוח עם שליח עד הבית לתל אביב מגיע תוך 1-2 ימי עסקים והמשלוח בחינם! לרגל ההזמנה הראשונה שלך, הכנתי עבורך קוד קופון של 10% הנחה: WELCOME10. תרצי שאשלח לך קישור מהיר לסיום ההזמנה עם ההנחה כבר בפנים?',
      english_translation: 'Hi! Yes, the Solitaire ring in size 7 is currently in stock (only 3 units left). Express courier delivery to Tel Aviv takes 1-2 business days and shipping is free! For your first order, I have prepared a 10% discount code for you: WELCOME10. Would you like me to send a quick checkout link with the discount already applied?',
      whatsapp_cloud_api_metadata: {
        waba_account_id: 'WABA_94820198273',
        phone_number_id: '+972-3-555-0192 (Official Business Account)',
        message_id: 'wamid.HBgLMzk3MjU0ODE5MjA0MRUCABEYEjA0RjkyM0FBOTAyM0I=',
        delivery_status: 'delivered_and_read',
        human_escalation_status: 'AUTOMATED_SATISFACTION (Escalation available via "נציג")',
      },
    },
  },
  table: {
    badge: 'Live Inbound Conversations',
    title: 'Active WhatsApp Customer Service & Order Queue',
    description: 'Live inbound WhatsApp sessions from Israeli customers (+972) showing real-time WooCommerce resolution, stock queries, tracking, and handoff triggers.',
    columns: [
      { key: 'id', label: 'Session ID' },
      { key: 'entityName', label: 'Customer / Israeli Phone' },
      { key: 'category', label: 'Inquiry Category' },
      { key: 'status', label: 'Resolution Status' },
      { key: 'latency', label: 'Response Time' },
      { key: 'action', label: 'Inspection' },
    ],
    rows: [
      {
        id: 'WA-8491',
        entityName: 'Maya Cohen (+972-50-291-8401)',
        category: 'Ring Sizing & Gold Karat Details',
        status: 'verified',
        latency: '240ms',
        provider: 'Claude 3.5 Sonnet / WooCommerce REST',
        updatedAt: 'Just now',
        payload: {
          customer_name: 'Maya Cohen',
          phone: '+972-50-291-8401',
          city: 'Herzliya, Israel',
          inquiry: 'איך אני יודעת מה מידת הטבעת שלי? יש טבלת מידות?',
          intent: 'SIZING_CHART_ASSISTANCE',
          ai_action: 'Sent interactive printable ring sizing guide and recommended EU size 52',
          woocommerce_cart_created: 'True (Draft Cart ID: 940182)',
          human_escalation: 'False (Customer satisfied)',
          meta_api_waba: 'Client Owned Meta Business Manager',
        },
      },
      {
        id: 'WA-8490',
        entityName: 'David Levi (+972-52-710-9283)',
        category: 'Order Status & Courier Tracking',
        status: 'verified',
        latency: '310ms',
        provider: 'WooCommerce API #58192',
        updatedAt: '2 mins ago',
        payload: {
          customer_name: 'David Levi',
          phone: '+972-52-710-9283',
          inquiry: 'שלום, מתי מגיעה הזמנה מספר 58192?',
          order_id: '58192',
          order_status: 'OUT_FOR_DELIVERY',
          courier: 'Israel Post Express (דואר ישראל שליחים)',
          tracking_number: 'IL948201948',
          estimated_delivery: 'Today by 16:00',
          ai_action: 'Dispatched automated status card with direct courier tracking link',
          human_escalation: 'False',
        },
      },
      {
        id: 'WA-8489',
        entityName: 'Sarah Ben-David (+972-54-619-3302)',
        category: 'Abandoned Cart WhatsApp Recovery',
        status: 'active',
        latency: '190ms',
        provider: 'Automated 1-Hour Recovery Hook',
        updatedAt: '5 mins ago',
        payload: {
          customer_name: 'Sarah Ben-David',
          phone: '+972-54-619-3302',
          cart_value: '₪620',
          cart_items: ['Silver Tennis Bracelet 18cm', 'Velvet Gift Box'],
          abandoned_duration: '62 minutes ago',
          template_dispatched: 'cart_reminder_10off (Meta approved)',
          response_received: 'Customer clicked direct WhatsApp checkout link',
          conversion_status: 'PAID (Order #58204)',
        },
      },
      {
        id: 'WA-8488',
        entityName: 'Yossi Mizrahi (+972-53-481-9920)',
        category: 'Return & Exchange Policy',
        status: 'flagged',
        latency: '420ms',
        provider: 'Human Representative Handoff',
        updatedAt: '8 mins ago',
        payload: {
          customer_name: 'Yossi Mizrahi',
          phone: '+972-53-481-9920',
          inquiry: 'קיבלתי את המוצר אבל אני רוצה להחליף דגם, אפשר לדבר עם נציג טלפוני?',
          intent: 'HUMAN_REPRESENTATIVE_REQUEST',
          handoff_trigger: 'Explicit human escalation keyword ("נציג")',
          ai_action: 'Paused automated bot, dispatched internal Slack/Email webhook alert to support team',
          agent_assigned: 'Customer Support Desk (Queue: Priority 1)',
        },
      },
      {
        id: 'WA-8487',
        entityName: 'Noa Sharon (+972-58-912-4011)',
        category: 'Custom Engraving & Special Request',
        status: 'verified',
        latency: '280ms',
        provider: 'Claude 3.5 Sonnet / Product Spec',
        updatedAt: '12 mins ago',
        payload: {
          customer_name: 'Noa Sharon',
          phone: '+972-58-912-4011',
          inquiry: 'האם אפשר להוסיף חריטה אישית של שם בעברית על הצמיד?',
          intent: 'CUSTOM_ENGRAVING_QUERY',
          ai_action: 'Confirmed free Hebrew engraving up to 15 characters, provided font preview link',
          woocommerce_link_sent: 'https://store.co.il/product/bracelet-engrave',
          human_escalation: 'False',
        },
      },
    ],
  },
};
